import AddOrUpdateBookCard from "components/Cards/AddOrUpdateBookCard";

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

const bookInfo = {
  title: "Đắc Nhân Tâm",
  description:
    "Là quyển sách đầu tiên có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới, Đắc Nhân Tâm là cuốn sách đem lại những giá trị tuyệt vời cho người đọc, bao gồm những lời khuyên cực kì bổ ích về cách ứng xử trong cuộc sống hàng ngày. Sức lan toả của quyển sách vô cùng rộng lớn – với nhiều tầng lớp, đối tượng. Đắc Nhân Tâm không chỉ là là nghệ thuật thu phục lòng người, Đắc Nhân Tâm còn đem lại cho độc giả góc nhìn, suy nghĩ sâu sắc về việc giao tiếp ứng xử.",
  image:
    "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1037/bc41cf7eb952949e0f6f607dc56f46a3bfb49b17.png",
  author: "Dale Carnegie",
  category: null,
  price: 61300,
};

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <AddOrUpdateBookCard
            title={`Edit ${bookInfo.title}`}
            id={id}
            bookInfo={bookInfo}
          />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;
