import UserCardTable from "components/Cards/UserCardTable";
import Admin from "layouts/Admin";

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
