import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modify } from "../../redux/slices/bucketSlice";
import { Container, Content } from "./styled";
import { IoIosArrowBack } from "react-icons/io";

// 내가 의도하고자 한것은 파라미터로 버킷 아이디를 받아 아이디를 이용해 조회한 내용을 보여주는 것인데 대실패!

const Detail = () => {
  const { bucketId } = useParams();
  const [bucket, setBucket] = useState(null);
  const bucketList = useSelector((state) => state.bucket.bucketList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const bucket = bucketList.filter((bucket) => bucket._id === bucketId);
    console.log(bucket);

    setBucket(bucket?.[0]);
  }, []);

  return (
    <Container>
      <Content backgroundColor={bucket?.style.backgroundColor}>
        {!isEdit ? (
          <h3>{bucket?.title}</h3>
        ) : (
          <input
            className="edit-title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        )}

        {!isEdit && <hr />}
        {!isEdit ? (
          <h4>{bucket?.desc}</h4>
        ) : (
          <textarea
            className="edit-desc"
            value={newDesc}
            onChange={(e) => {
              setNewDesc(e.target.value);
            }}
          />
        )}

        {!isEdit ? (
          <button
            className="edit-btn"
            onClick={() => {
              setNewTitle(bucket.title);
              setNewDesc(bucket.desc);

              setIsEdit((prev) => !prev);
            }}
          >
            수정
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => {
              const newBucket = { title: newTitle, desc: newDesc };

              dispatch(modify({ _id: bucket._id, ...newBucket }));

              setBucket({ ...bucket, ...newBucket });

              setIsEdit(false);
            }}
          >
            완료
          </button>
        )}

        <button
          className="back-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </button>
      </Content>
    </Container>
  );
};

export default Detail;

// * 트러블 내용:
// 새로고침을 하면 기존에 있는 버킷리스트 uuid가 모두 바껴서 조회하지 못한다.
// => 해결방법:  리덕스에 현재 페이지 정보를 넣어준다...
