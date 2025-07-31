import { createContext, useState } from "react";

// Post 용도로 사용하는 Context를 생성
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { title: "1. 오늘의 아침식사", content: "오늘은 간단하게 토스트와 우유로 아침을 먹었어요." },
    { title: "2. 출근길 풍경", content: "출근길에 하늘이 맑아서 기분이 좋았습니다." },
    { title: "3. 점심 메뉴 추천", content: "여러분은 점심으로 뭘 드셨나요? 저는 김치찌개 먹었어요." },
    { title: "4. 주말 나들이 후기", content: "지난 주말에 공원에 다녀왔는데 너무 좋았어요." },
    { title: "5. 오늘 읽은 책", content: "최근에 읽은 소설이 감명 깊었습니다." },
    { title: "6. 작은 일상 행복", content: "따뜻한 커피 한 잔이 오늘 하루를 힘나게 해줬습니다." },
    { title: "7. 집 청소 끝", content: "오늘 집안을 깨끗이 정리해서 뿌듯했어요." },
    { title: "8. 운동 기록", content: "아침에 조깅 30분으로 상쾌하게 하루 시작했어요." },
    { title: "9. 동네 산책", content: "저녁에 공원 산책하니 기분 전환이 되네요." },
    { title: "10. 반려동물 이야기", content: "우리 강아지가 오늘 새로운 장난감을 좋아해요." },
    { title: "11. 영화 감상 후기", content: "오랜만에 감동적인 영화를 봤습니다." },
    { title: "12. 오늘의 일기", content: "일상 속 소소한 즐거움을 기록합니다." },
    { title: "13. 커피 한 잔", content: "맛있는 커피 한 잔으로 하루를 마무리합니다." },
    { title: "14. 맛집 탐방", content: "동네에 새로 생긴 맛집에 다녀왔어요." },
    { title: "15. 친구와 수다", content: "친구와 오랜만에 만나서 즐거운 시간을 보냈어요." },
    { title: "16. 오늘의 날씨", content: "햇살이 좋아서 산책하기에 딱 좋은 날씨였습니다." },
    { title: "17. 쇼핑 후기", content: "필요했던 물건을 저렴하게 잘 샀어요." },
    { title: "18. 집밥 자랑", content: "오늘 저녁은 제가 직접 만든 불고기예요." },
    { title: "19. 취미생활 공유", content: "주말마다 그림을 그리며 힐링하고 있어요." },
    { title: "20. 독서 시간", content: "조용한 저녁에 책 읽는 시간을 가졌습니다." },
    { title: "21. 가족과의 시간", content: "가족들과 홈파티를 즐겼어요." },
    { title: "22. 여행 준비", content: "다음 달 여행 계획을 세우고 있어요." },
    { title: "23. 새로운 취미 도전", content: "요가 클래스를 시작해 봤어요." },
    { title: "24. 이웃과의 교류", content: "옆집분과 함께 마당 정리를 도왔습니다." },
    { title: "25. 오늘의 목표 달성", content: "계획한 일을 모두 끝내 뿌듯해요." },
    { title: "26. 간식 타임", content: "초콜릿 먹으면서 잠깐 휴식 중이에요." },
    { title: "27. 운동 인증샷", content: "헬스장에서 운동하고 인증샷 남겼어요." },
    { title: "28. 소소한 고민", content: "요즘 작은 고민이 생겼어요." },
    { title: "29. 오늘의 명언", content: "힘들 때 힘이 되는 명언을 나눠요." },
    { title: "30. 주말 계획", content: "이번 주에는 무엇을 하며 보낼지 고민 중입니다." },
    { title: "31. 점심 먹고 산책", content: "점심식사 후 동네 한 바퀴 산책했습니다." },
    { title: "32. 오랜만의 연락", content: "지난주 친구에게 연락이 왔어요." },
    { title: "33. 계절의 변화", content: "여름이 다가오는 것이 느껴지네요." },
    { title: "34. 아침 스트레칭", content: "아침마다 간단히 스트레칭을 해요." },
    { title: "35. 오늘도 화이팅", content: "스스로에게 응원의 한마디를 보냅니다." },
    { title: "36. 휴식의 중요성", content: "잠깐 쉬는 시간도 정말 필요한 것 같아요." },
    { title: "37. 오늘의 음악", content: "즐겨 듣는 노래를 공유합니다." },
    { title: "38. 일상이 행복", content: "작은 일상에서 행복을 찾고 있어요." },
    { title: "39. 취미 사진 찍기", content: "꽃사진을 찍으며 기분전환 했어요." },
    { title: "40. 코로나 일상", content: "마스크를 쓴 일상이 이제는 익숙해졌네요." },
    { title: "41. 온라인 모임", content: "친구들과 온라인으로 회포를 풀었어요." },
    { title: "42. 야식 타임", content: "밤에 라면이 너무 땡겼어요." },
    { title: "43. 오늘의 감사", content: "작은 것에도 감사하려고 노력 중입니다." },
    { title: "44. 오늘의 운동 목표", content: "스쿼트 50개 성공!" },
    { title: "45. 기분 좋은 하루", content: "별다른 일은 없었지만 마음이 편안한 하루였어요." },
    { title: "46. 취미로 만든 작품", content: "직접 만든 머그컵을 자랑합니다." },
    { title: "47. 오늘의 꿀팁", content: "바쁜 아침엔 전날 미리 준비해두면 좋아요." },
    { title: "48. 오늘 느낀 점", content: "사소한 것에도 즐거움을 느꼈어요." },
    { title: "49. 일상 속 발견", content: "출근길에 예쁜 꽃을 발견했어요." },
    { title: "50. 하루를 마치며", content: "오늘도 열심히 보낸 하루였습니다." }
  ]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children} 
    </PostContext.Provider>
  )
}

