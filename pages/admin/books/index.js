import BookCardTable from "components/Cards/BookCardTable.js";
import Admin from "layouts/Admin.js";

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BookCardTable title="Books" />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;
