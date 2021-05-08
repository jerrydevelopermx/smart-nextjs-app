import { useRouter } from "next/router";

function DeptsPage() {
  const router = useRouter();
  console.log(router.query);
  const { id, deptId, section, itemId } = router.query;

  return (
    <div>
      {" "}
      <h1>
        Store {id} Admin | DeptID {deptId} | Section {section} | Item ID:{" "}
        {itemId} Page
      </h1>
    </div>
  );
}

export default DeptsPage;
