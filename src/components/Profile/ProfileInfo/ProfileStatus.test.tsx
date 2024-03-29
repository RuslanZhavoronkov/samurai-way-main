import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in thee state", () => {
    const component = create(<ProfileStatus
         status={"it-kamasutra.com"} 
         updateProfileStatus = {() => {}}
         />);
         debugger;
   const instance = component.getInstance();
//     expect(instance.state.status).toBe("it-kamasutra.com");
  });

test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus
         status={"it-kamasutra.com"} 
         updateProfileStatus = {() => {}}
         />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children.length).toBe(1)
})

test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus
         status={"it-kamasutra.com"} 
         updateProfileStatus = {() => {}}
         />);
    const root = component.root;
     let span = root.findByType("span");
     expect(span.children[0]).toBe("it-kamasutra.com")
})

test("input should be displayed in editMode instead of span", () => {
     const component = create(<ProfileStatus
          status={"it-kamasutra.com"} 
          updateProfileStatus = {() => {}}
          />);
     const root = component.root;
      let span = root.findByType("span");
      span.props.onDoubleClick()
      let input = root.findByType("input");
      expect(input.props.value).toBe("it-kamasutra.com")
 })


//  test("callback shoul be called", () => {
//      const mockCallback = jest.fn();
//      const component = create(<ProfileStatus
//           status={"it-kamasutra.com"} 
//           updateProfileStatus = {mockCallback}
//           />);
//      const instance = component.getInstance();
//      // instance.deactivateEditMode()
//       expect(mockCallback.mock.calls.length).toBe(1)
//  })

})