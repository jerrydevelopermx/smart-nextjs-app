import { useRouter } from "next/router";

function ResourcesPage() {
  const router = useRouter();
  console.log(router.query);
  const { id, section, action, resourceId } = router.query;

  return (
    <div>
      {" "}
      <h1>
        Store {id} Admin | Section {section} | Action {action} | Resource ID:{" "}
        {resourceId} Page
      </h1>
    </div>
  );
}

export default ResourcesPage;
