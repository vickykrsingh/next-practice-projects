import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function CommonForm({
  formAction,
  getCurrentControls,
  btnType,
  btnText,
  isDisabled,
  formData,
  setFormData,
  handleFileChange,
}) {
  const renderCurrentControlsByType = async (getCurrentControls) => {
    switch (getCurrentControls.type) {
      case "input":
        content = (
          <div>
            <Input
              type="input"
              name={getCurrentControls.name}
              id={getCurrentControls.name}
              placeholder={getCurrentControls.placeholder}
              value={formData[getCurrentControls.name]}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [getCurrentControls.name]: e.target.value,
                });
              }}
            />
          </div>
        );
      case "file":
        content = (
          <div>
            <Input
              type="file"
              name={getCurrentControls.name}
              id={getCurrentControls.name}
              placeholder={getCurrentControls.placeholder}
              value={formData[getCurrentControls.name]}
              onChange={handleFileChange}
            />
          </div>
        );
      default:
        content = (
          <div>
            <Input
              type="input"
              name={getCurrentControls.name}
              id={getCurrentControls.name}
              placeholder={getCurrentControls.placeholder}
              value={formData[getCurrentControls.name]}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [getCurrentControls.name]: e.target.value,
                });
              }}
            />
          </div>
        );
    }
  };
  return (
    <form action={formAction}>
      {getCurrentControls.map((current) =>
        renderCurrentControlsByType(current)
      )}
      <div>
        <Button disabled={isDisabled} type={btnType || "submit"}>
          {btnText}
        </Button>
      </div>
    </form>
  );
}

export default CommonForm;
