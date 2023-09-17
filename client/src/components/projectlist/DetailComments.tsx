import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";

import Checkbox from "../../components/userlist,projectlist/Checkbox";
import ActionButton from "../../components/userlist,projectlist/ActionButton";
import Tooltip from "../../components/userlist,projectlist/Tooltip";
import { getTokensFromLocalStorage } from "../../utility/tokenStorage";

import { addComment, editComment, removeComment } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import classes from "./DetailComments.module.css";

import authInstance from "../../utility/authInstance";

const DetailComments = () => {
  const navigate = useNavigate();
  const { projectId } = useParams() as { projectId: string };

  const dispatch = useAppDispatch();
  const currentProject = useAppSelector(state => state.projects.currentData);

  const { replyList: comments, writerId } = currentProject || {};
  const { id } = getTokensFromLocalStorage() as AccessTokenType;

  // 작성자가 본인인지 확인
  const isMyProject = writerId === id;
  // console.log("게시글 작성자인가요? ", isMyProject);

  // console.log("replyList", comments);

  // 댓글 등록
  const [content, setContent] = useState("");
  // const [isApply, setIsApply] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const data = {
    content: content,
    isApply: isChecked,
    memberBoardId: projectId,
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // const handleAcceptBtn = () => {};

  const handleRejectBtn = () => {};

  /** Add Comment */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addComment(data))
      .unwrap()
      .then(() => {
        console.log("🚀 CREATE 성공", data);
        window.alert("댓글이 등록되었습니다.");
        window.location.reload();
      })
      .catch(error => {
        console.warn("🚀 CREATE 실패", error, data);
      })
      .finally();
  };

  /** Edit Comment */
  const [isEdit, setIsEdit] = useState(false);
  const [editableCommentId, setEditableCommentId] = useState<number | null>(
    null,
  );

  const [editedComment, setEditedComment] = useState("");

  const onEditComment = (targetId: number) => {
    console.log("🚀 댓글 수정요청");

    const originComment = comments?.filter(
      comment => comment.replyId === targetId,
    );
    console.log("originComment", originComment[0].content);
    setEditedComment(originComment[0].content);

    if (comments?.find(comment => comment.replyId === targetId)) {
      console.log(targetId);
      setEditableCommentId(targetId);
    } else {
      setEditableCommentId(null);
    }

    setIsEdit(true);
  };

  // const editCommentData = {
  //   content: "댓글 수정",
  //   acceptType: 0,
  // };

  const editData = {
    content: editedComment,
    acceptType: 0,
  };

  const onSubmitEditComment = (targetId: number) => {
    console.log("🚀 댓글 수정반영");

    dispatch(
      editComment({
        targetId,
        data: editData,
      }),
    )
      .unwrap()
      .then(() => {
        console.log("EDIT", targetId);
        window.alert("댓글이 수정되었습니다.");
        window.location.reload();
      })
      .catch(error => {
        console.warn(
          "EDIT COMMENT ERROR",
          error,
          "targetId: ",
          targetId,
          editData,
        );
        // setError("Something went wrong");
      });
  };

  const handleChangeEditComment = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEditedComment(e.target.value);
  };

  /** Remove Comment */
  const onRemoveComment = (targetId: number) => {
    console.log("🚀 댓글 삭제하기");

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      dispatch(removeComment(targetId))
        .unwrap()
        .then(() => {
          console.log("DELETE", targetId);
          // 삭제가 성공하면 alert, 페이지 이동여부 확인
          window.alert("댓글이 삭제되었습니다.");
          window.location.reload();
        })
        .catch(error => {
          console.warn("DELETE COMMENT ERROR", error, "targetId: ", targetId);
          // setError("Something went wrong");
        });
      // .finally(() => setIsLoading(false));
    }
  };

  // BY 동준
  // 수락 버튼 함수(api 콜)
  const handleAcceptBtn = async (writerId, memberBoardId) => {
    try {
      await authInstance.post("/alarms", {
        alarmType: 0,
        targetId: writerId,
        memberId: memberBoardId,
      });
      console.log("알람 전송");
    } catch (error) {
      console.error("알람 전송 안 됨", error);
    }
  };

  return (
    <section className={classes.comments}>
      <h4>댓글</h4>
      <form className={classes.writeArea} onSubmit={handleSubmit}>
        <textarea
          placeholder="댓글을 남겨주세요!"
          onChange={handleChangeComment}
          value={content}
        ></textarea>
        <div className={classes.submitBtn}>
          <Checkbox
            title="apply"
            text="프로젝트 지원 댓글"
            infoText={true}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <ActionButton buttonType="submit">댓글 등록하기</ActionButton>
        </div>
      </form>
      {/*TODO 여기다여기! 여기에 comment.wirterId가 있다!!! */}
      <ul className={classes.commentsArea}>
        {comments?.map(comment => (
          <li key={comment.replyId} className={classes.comment}>
            <div className={classes.meta}>
              <div
                className={classes.userImage}
                onClick={() => navigate(`/mypage/${comment.writerId}`)}
              >
                <img
                  src={comment.writerImageURL}
                  alt={`${comment.writerNickName} 프로필사진`}
                />
              </div>
              <div className={classes.usernameAndDate}>
                <div className={classes.username}>{comment.writerNickName}</div>
                <div className={classes.date}>
                  {new Date(comment.createAt).toLocaleString()}
                </div>
              </div>
              <div className={classes.editArea}>
                {comment.writerId === id ? (
                  <>
                    <div className={classes.edit}>
                      {isEdit && editableCommentId === comment.replyId ? (
                        <div
                          onClick={() => onSubmitEditComment(comment.replyId)}
                        >
                          V 수정하기
                        </div>
                      ) : (
                        <EditSvg
                          width="16"
                          height="16"
                          onClick={() => onEditComment(comment.replyId)}
                        />
                      )}
                    </div>
                    <div
                      className={classes.delete}
                      onClick={() => onRemoveComment(comment.replyId)}
                    >
                      <DeleteSvg width="16" height="16" />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className={classes.contents}>
              {isEdit && editableCommentId === comment.replyId ? (
                <textarea
                  className={classes.content}
                  value={editedComment}
                  onChange={handleChangeEditComment}
                />
              ) : (
                <div className={classes.content}>
                  {/* 지원댓글 표시 (스타일은 임시) */}
                  {comment.apply ? (
                    <span className={classes.applyComment}>지원댓글</span>
                  ) : null}
                  {comment.content}
                </div>
              )}

              {isMyProject &&
                comment.acceptType === "NONE" &&
                comment.apply && (
                  <div className={classes.acceptArea}>
                    {/* <ActionButton type="outline" handleClick={handleAcceptBtn}>
                      수락하기
                    </ActionButton> */}
                    {/* BY 동준 */}
                    <ActionButton
                      type="outline"
                      handleClick={() =>
                        handleAcceptBtn(
                          comment.writerId,
                          currentProject?.memberBoardId,
                        )
                      }
                    >
                      수락하기
                    </ActionButton>
                    <ActionButton type="outline" handleClick={handleRejectBtn}>
                      거절하기
                    </ActionButton>
                  </div>
                )}
              {comment.acceptType === "ACCEPT" && (
                <div className={classes.acceptArea}>
                  <Tooltip type="APPROVE">팀원으로 수락한 유저입니다.</Tooltip>
                </div>
              )}
              {comment.acceptType === "REFUSE" && (
                <div className={classes.acceptArea}>
                  <Tooltip type="REJECT">팀원으로 거절한 유저입니다.</Tooltip>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DetailComments;
