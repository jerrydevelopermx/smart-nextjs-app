import { gql } from "@apollo/client";

const mutations = {
  UPDATE_HTML_CONTENT: gql`
    mutation UpdateContent(
      $id: ID
      $sectionId: String
      $content: ContentInput
    ) {
      updateContent(id: $id, sectionId: $sectionId, content: $content) {
        id
        content
      }
    }
  `,
  UPDATE_SITE_APPEARANCE: gql`
    mutation UpdateAppearance($id: ID, $appearance: AppearanceInput) {
      updateAppearance(id: $id, appearance: $appearance) {
        id
      }
    }
  `,
  UPDATE_SITE_CONTENT: gql`
    mutation UpdateSiteContent($id: ID, $content: SiteContentInput) {
      updateSiteContent(id: $id, content: $content) {
        id
      }
    }
  `,
  ADD_USER: gql`
    mutation AddTodo($type: String!) {
      addTodo(type: $type) {
        id
        content
        author
      }
    }
  `,

  ADD_DEPT: gql`
    mutation AddDepartment($department: DepartmentInput) {
      addDepartment(department: $department) {
        id
        departmentName
      }
    }
  `,
  USER_LOGIN: gql`
    mutation Login($username: String!, $password: String!, $store: Int!) {
      login(email: $username, password: $password, store: $store) {
        token
        userType
        userName
        store
      }
    }
  `,
};

export default mutations;
