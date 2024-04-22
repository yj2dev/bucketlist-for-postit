import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { randomColor, randomDegree } from "../../utils/random";

/*
   Q1. UUID를 사용하는 것이 적당할지, Sequence ID 를 사용할지 고민된다.
   본 예제에서는 DB에 저장하는것이 아니기 때문에 Sequence ID를 사용해도 상관없을것 같다.
   A1. 가급적이면 uuid 를 쓰는게 좋다.
   // +베스쳔 서버


   Q2. bucketList 안의 객체를 유효성검사 할 수 있을까? (TS를 써야만 가능한가?)
   A2. TS를 쓰는게 좋다.  JS에서는 프로토타입 사용했었다(과거), 모델만들기.

   Q3. 변수명에 대한 의문 복수의 항목을 표현할 때(To do List는 복수 표현이 따로 없어 적절한 예제는 아님) bucketList 라고 표현하기도 하고  또는 bucketArr, buckets 라고 표현하기로 하는데 현업에서는 어떠한 변수명을 더 선호하는가? (필자는 개인적으로 buckets 선호)
   A3. 회사 컨벤션 따르기.

 */
const initialState = {
  bucketList: [
    {
      title: "먹이 그만 먹기",
      desc: "목표: 10KG 감량",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
    {
      title: "취업하기",
      desc: "얕고 넓은 지식보단 좁더라도 깊게 파야겠다.....",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
    {
      title: "전기차 사기",
      desc: "내년 상반기 \nEV5 출시 예정",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
    {
      title: "캐논 R8",
      desc:
        "출시일 : 2023-04\n" +
        "원산지 : 일본\n" +
        "약 2,420만 화소 풀프레임 CMOS 센서 탑재\n" +
        "약 461g의 작고 가벼운 바디와 편리한 조작성\n" +
        "최대 약 40fps의 고속 연속 촬영\n" +
        "크롭 없는 6K 오버샘플링 4K 60p 동영상\n" +
        "딥러닝으로 더욱 진화한 EOS iTR AF X피사체 검출",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
    {
      title: "성악 배우기",
      desc: "파사지오, 바리톤 필수",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
    {
      title: "연기 배우기",
      desc: "내가 그 감정을 가지고 있다고해서 관객들도 똑같은 감정을 공유하진 않는다.\n배우는 감정을 정제해 관객에게 전달한다.",
      _id: uuidv4(),
      isCompleted: false,
      style: {
        backgroundColor: randomColor(),
        degree: randomDegree(),
      },
    },
  ],
  bucketInfo: null,
};

// Q4. Create, Delete 를 액션명으로 사용하고 싶었지만 Delete가 내보낼때 내보내지지 않습니다.(예약어라서 그런것 같음) 그래서 add 랑 관련된 액션명을 사용했습니다.  이때 값을 변경한다고 할 때 update, modify, change 등 다양한 변수명이 쓰일 수 있는데 이런건 개발자맘대로 사용하는건가요? 아니면 회사내부컨벤션에 정의되어 있나요?
// A4.
export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    add: (state, action) => {
      state.bucketList.push({
        ...action.payload,
        _id: uuidv4(),
        style: {
          backgroundColor: randomColor(),
          degree: randomDegree(),
        },
      });
    },
    modify: (state, action) => {
      const index = state.bucketList.findIndex(
        (bucket) => bucket._id === action.payload._id,
      );

      console.log("state >> ", state);

      // Q5. 리덕스에서 생성한 객체는 복사를 못하나요?
      // A5.
      const newBucketList = [...state.bucketList];
      console.log("newBucketList >> ", newBucketList);

      // state.bucketList[index] = {
      //   title: action.payload.title,
      //   desc: action.payload.desc,
      //   // _id: uuidv4(),
      // };

      // immer를 검색하서 찾은 상태 변경방법.
      state.bucketList[index].title = action.payload.title;
      state.bucketList[index].desc = action.payload.desc;
    },
    setCompleted: (state, action) => {
      const index = state.bucketList.findIndex(
        (bucket) => bucket._id === action.payload._id,
      );

      state.bucketList[index].isCompleted = !action.payload.isCompleted;
    },
    remove: (state, action) => {
      const newBucketList = state.bucketList.filter(
        (bucket) => bucket._id !== action.payload,
      );
      state.bucketList = newBucketList;
    },
    removeAll: (state) => {
      state.bucketList = [];
    },
  },
});

export const {
  add,
  modify,
  setBucketInfo,
  findById,
  remove,
  removeAll,
  setCompleted,
} = bucketSlice.actions;

export default bucketSlice.reducer;
