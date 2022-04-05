import UserCardTable from "components/Cards/UserCardTable.js";
import Admin from "layouts/Admin.js";

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <UserCardTable title="Users" />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;
