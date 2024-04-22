import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  add,
  remove,
  removeAll,
  setCompleted,
} from "../../redux/slices/bucketSlice";
import { useNavigate } from "react-router-dom";
import {
  ContentSection,
  DeleteModalStyle,
  Item,
  ItemAdd,
  ItemButtonSet,
} from "./styled";
import { IoIosAdd } from "react-icons/io";
import Modal from "../../components/Modal";

// Q1. 현업에서는 함수 선언식과 표현식중 무엇을 더 선호하는가?
// A1. 팀마다 다름

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bucketList = useSelector((state) => state.bucket.bucketList);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [itemHover, setItemHover] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [deleteItemName, setDeleteItemName] = useState("");

  // Q1. 컴포넌트는 어디까지 쪼개야 하는가? 너무 많이 나누면 가독성이나 관리측면에서 더 많은 시간이 소요될 것 같고 너무 덜 쪼개면 추후에 코드수 증가로 추가로 컴포넌트를 나눠 관리하기 힘들것 같다.
  // A1. 1컴포넌트 1기능

  // Q2. onClick, onSubmit VS handleClick, handleSubmit 어떤 경우에 쓰이는거지?
  //    내가 onClick과 handle을 구분해서 쓰는 기준은 이 로직이 사용자의 액션에 의해 동작하는지 여부에 따라 작성했다.
  //    블로그 참고 => on 접두사가 붙은 경우, 이 Prop에 실제 이벤트가 연결되어 있다는 걸 뜻하고,
  //              handle 접두사가 붙은 경우, 이벤트가 발생했을 때 호출되는 실제 Function을 의미합니다.
  // A2. 내부컨벤션 따르기 +airbnb 팀 컨벤션 참고

  const onClickSave = () => {
    if (!title.trim().length) return;
    if (!desc.trim().length) return;

    dispatch(
      add({
        title,
        desc,
      }),
    );

    setTitle("");
    setDesc("");
    setShowForm(false);
  };

  const onConfirmDeleteItem = () => {
    dispatch(remove(deleteItemId));
    setShowDeleteModal(false);
  };

  const onCloseModal = () => {};

  return (
    <ContentSection>
      {bucketList &&
        bucketList.map((bucket, index) => (
          <Item
            key={index}
            className={`item ${bucket.isCompleted && "completed"}`}
            backgroundColor={bucket.style.backgroundColor}
            degree={`rotate(${bucket.style.degree}deg)`}
            onMouseEnter={() => {
              setItemHover(index);
            }}
            onMouseLeave={() => {
              setItemHover(null);
            }}
          >
            <div
              className="content"
              onClick={() => {
                navigate(`/detail/${bucket._id}`);
              }}
            >
              <div className="h3-wrapper">
                <h3 className={bucket.isCompleted && "completed"}>
                  {bucket.title}
                </h3>
              </div>
              <hr />
              <h4 className={bucket.isCompleted && "completed"}>
                {bucket.desc}
              </h4>
            </div>

            {itemHover === index && (
              <ItemButtonSet>
                <button
                  className="toggle-completed-btn"
                  onClick={() => {
                    dispatch(
                      setCompleted({
                        _id: bucket._id,
                        isCompleted: bucket.isCompleted,
                      }),
                    );
                  }}
                >
                  {bucket.isCompleted ? "복구" : "완료"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    setDeleteItemName(bucket.title);
                    setDeleteItemId(bucket._id);
                    setShowDeleteModal((prev) => !prev);
                  }}
                >
                  삭제
                </button>
              </ItemButtonSet>
            )}
          </Item>
        ))}
      <Modal show={showDeleteModal}>
        <DeleteModalStyle>
          <p>
            <span>{deleteItemName}</span>&nbsp;을 삭제하시겠습니까?
          </p>
          <button
            className="cancel-delete-btn"
            onClick={() => setShowDeleteModal(false)}
          >
            취소
          </button>
          <button className="confirm-delete-btn" onClick={onConfirmDeleteItem}>
            삭제
          </button>
        </DeleteModalStyle>
      </Modal>
      <ItemAdd>
        <button
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
          className={`form-toggle-btn ${showForm && "active"}`}
        >
          <IoIosAdd />
        </button>

        <div className={`input-form ${showForm && "active"}`}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="내용"
          />
          <button className="save-btn" onClick={onClickSave}>
            저장
          </button>
        </div>
      </ItemAdd>
    </ContentSection>
  );
};

export default Home;
