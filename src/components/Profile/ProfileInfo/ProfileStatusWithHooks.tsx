import React, { ChangeEvent, useEffect, useState } from "react";

export type ProfileStatusPropsType = {
  status: string;
  updateProfileStatus: (status: string) => void;
};

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (
  props
) => {
  const [editMode, setEditMode] = useState<boolean>(false); //вкл/выкл режим редактирования
  const [status, setStatus] = useState<string>(props.status);
  useEffect(()=> {
    setStatus(props.status)
  },[props.status])

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(status);
  };
  const onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <b>Status</b>: <span onDoubleClick={activateEditMode}>
            {props.status || "Hello my friend"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            value={status}
            onBlur={deactivateEditMode}
            onChange={onChangeStatusHandler}
          />
        </div>
      )}
    </div>
  );
};
