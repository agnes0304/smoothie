# SMOOTHIE | 스무디
<br />

<div  align="center">
  <img width="100%" src="https://github.com/codestates-seb/seb45_main_024/assets/85465266/4031b821-ac2e-403f-aa74-e293b092703b" alt="stackoverflow">
</div>

<br />

데모영상 바로가기


## 👋🏻"스무디"는요,

프로그래밍을 이제 막 시작한, 뉴비들을 위한 프로젝트 플랫폼입니다.<br/>
자신이 참여하고픈 프로젝트를 어필하고, 직접 기획한 프로젝트에 팀원을 모집할 수 있는 서비스이며, <br/>
사이트 내에서 서로에게 남긴 코멘트가 레퍼런스가 되어 자신과 잘 맞는 팀원을 모집할 수 있도록 기획했습니다.

</br></br>

## ℹ️ 프로젝트 정보
- 👥 팀 / 2023.08.24 - 2023.09.19 (약1개월)
- 배포 링크: (개인적으로 진행 중)
- 팀 깃허브 리드미: <a href="https://github.com/codestates-seb/seb45_main_024">바로가기</a><br/>

### 👤 개발 담당 영역
  - 서비스 유저플로우 다이어그램 작성
  - 마이페이지 CRUD 기능 전체 담당
    - 서비스 유저들에게 이력서가 될 수 있는 “프로필” CRUD 기능 구현
    - 같이 프로젝트를 진행한 유저로부터 받을 수 있는 “동료리뷰” CRUD 기능
    - 회원정보 UD 기능

</br></br>

## 🛠️ 개발 환경 및 기술 스택

<h4 align="center">프론트엔드</h4>
<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![AWS](https://img.shields.io/badge/AWS.S3-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

</div>

<br />

<h4 align="center">커뮤니케이션</h4>
<div align="center">

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

</div>

<br />



## 🎞️ 데모 영상 모음

### 🎦 마이페이지 전체 탭 시연

![전체보기-min](https://github.com/agnes0304/chronos-nextjs/assets/86249667/50c2f9cd-8685-44b3-af72-122bf17c68a9)

- 써머리(Summary) : 자신이 작성한 프로젝트 카드 및 본인 어필 카드를 확인할 수 있음.
- 프로필(Profile) : 서비스 내에서 자기소개서처럼 사용할 수 있는 탭. 수정 가능.
- 동료리뷰(Peer Review) : 프로젝트를 함께한 동료가 남기는 평가. 향후 나와 프로젝트를 함께하고자 하는 유저들이 레퍼런스로 참고할 수 있음.
- 내 정보(My Info) : 프로필 이미지 및 패스워드 변경, 회원탈퇴 가능.

<br />

### 🎦 상대방 동료 리뷰 페이지 - 동료 리뷰(Peer Review) 탭

![동료 리뷰 작성 시연-min](https://github.com/agnes0304/chronos-nextjs/assets/86249667/8e70f8d3-02b6-45dc-aae1-6d486afe4e45)

- ~본인의 동료리뷰 탭 내에서는 코멘트 남기기가 불가~ (9/19 이후 수정)
- 본인의 동료리뷰 탭 내에서는 코멘트 남기기 버튼 제거

<br />

### 🎦 프로필 하드스킬, 소프트 스킬 입력 - 프로필(Profile) 탭

![태그 입력 시연-min](https://github.com/agnes0304/chronos-nextjs/assets/86249667/69776ef8-2824-43d1-af49-2f5562350484)

- 프로그래밍 언어, 프레임워크를 제외한 기타 하드스킬(자격증, 언어 등)을 직접 입력할 수 있음.
- 자신의 성향과 특장점을 어필할 수 있는 소프트스킬 추가 가능.

<br />

### 🎦 작성한 카드 삭제 - 써머리(Summary) 탭

![카드 삭제 시연-min](https://github.com/agnes0304/chronos-nextjs/assets/86249667/8860677b-668c-497a-b345-3209171ec1f4)

- 자신이 작성한 카드를 삭제할 수 있음

<br />

## 🛠️ 수정 사항 

위 영상은 데모데이 제출을 위해 사전(최종 배포 이전)에 촬영된 영상으로, 최종 배포에 아래와 같은 수정 사항이 반영되었습니다. 

### 내 정보(My Info) 탭

- [x] 프로필 이미지 변경 가능
- [x] 회원 탈퇴 시, 탈퇴 확인 메시지 추가

- [x] 비밀번호 변경 시 숨김 처리
  - 비밀번호 숨기기 / 보이기 기능 추가
   ![패스워드](https://github.com/agnes0304/chronos-nextjs/assets/86249667/b18effb7-90fc-49ad-b531-2971208669fb)

<br />

### 동료 리뷰(Peer Review) 탭

- [x] 자신의 마이페이지 - 동료리뷰 탭에서 코멘트 남기기 버튼 제거
      
  - 기존 `alert` 처리에서 변경

<br />

### 프로필(Profile) 탭
  
- [x] 프로필 기술스택 설명 카드 이미지 깨짐 현상 해결

- [x] 프로필 수정 후 “저장” 버튼 → 깜빡임 효과로 위치 강조

<br />



## 📑 기타 문서

<ul>
   <li><a href="https://docs.google.com/spreadsheets/d/11oZXEgOzu-R6nhaLl01fjNce4CbsjGaMBRuxBB7RGKw/edit#gid=0">사용자 요구사항 정의서</a></li>
   <li><a href="https://www.figma.com/file/3EE66zhd0hVBgfgqaFL4xf/%EB%B8%94%EB%A3%A8%EB%B2%A0%EB%A6%AC-%EC%8A%A4%EB%AC%B4%EB%94%94-Main-Project-(%EC%BD%94%EB%93%9C%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%B8%A0-SEB)?type=design&node-id=19%3A62&mode=design&t=QosWAeIfoN5cmT6O-1">화면정의서 & </a>
   <a href="https://www.figma.com/file/3EE66zhd0hVBgfgqaFL4xf/%EB%B8%94%EB%A3%A8%EB%B2%A0%EB%A6%AC-%EC%8A%A4%EB%AC%B4%EB%94%94-Main-Project-(%EC%BD%94%EB%93%9C%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%B8%A0-SEB)?type=design&node-id=0%3A1&mode=design&t=QosWAeIfoN5cmT6O-1">디자인</a></li>
    <li><a href="https://file.notion.so/f/f/82d63a72-8254-4cde-bf1e-b2597b7c099c/9768d11d-298b-40a9-8ec0-441e39359eb0/Smoothie_%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3_%E1%84%86%E1%85%A2%E1%84%82%E1%85%B2%E1%84%8B%E1%85%A5%E1%86%AF.pdf?id=5c847c18-58f5-4960-a041-4ed6dad7db02&table=block&spaceId=82d63a72-8254-4cde-bf1e-b2597b7c099c&expirationTimestamp=1695254400000&signature=_g3eFohsWVG3lBcSxHAoMWRJVV7NkZPtlPE66uCVQQI&downloadName=Smoothie_%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3+%E1%84%86%E1%85%A2%E1%84%82%E1%85%B2%E1%84%8B%E1%85%A5%E1%86%AF.pdf">서비스 매뉴얼</a></li>
   <li><a href="https://docs.google.com/spreadsheets/d/1GOaEIBmPLuDytZGS3cyxTeE1cZHsgaY0LF1-c6ik5sI/edit#gid=1278959919">API 명세서 & 테이블 명세서</a></li>
</ul>

<br /><br />
