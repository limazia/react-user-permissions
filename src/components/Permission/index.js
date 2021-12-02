import React from "react";

function Permission({ children, permissionRequired }) {
  const user = {
    name: "Lima",
    permissions: ["view_user", "edit_user"]
  };

  const { permissions } = user;

  //return (permissions.some((permission) => permissionRequired.indexOf(permission) >= 0) && <>{children}</>);
  return permissions.some(
    (permission) => permissionRequired.indexOf(permission) >= 0
  ) ? (
    <>{children}</>
  ) : (
    <div>Você não tem permissão</div>
  );
}

export default Permission;
