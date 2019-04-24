<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> a5479bf73e09038ec7eafeb436b7df19b5e93386
import styled from "styled-components";

const DisplayLayout = styled.div`
  height: 81px;
  background-color: darkgray;
  border-radius: 9px 9px 0px 0px;
  font-size: 55px;
  color: white;
  position: relative;
<<<<<<< HEAD
=======
  overflow: hidden;
>>>>>>> a5479bf73e09038ec7eafeb436b7df19b5e93386
`;

const DisplayContent = styled.div`
  position: absolute;
  bottom: 0px;
  right: 10px;
`;

const Display = props => (
  <DisplayLayout>
    <DisplayContent>{props.result}</DisplayContent>
  </DisplayLayout>
);

export default Display;
