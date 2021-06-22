import React, { useState, useEffect } from "react";
import { Wrapper, WrapDiv, UpIcon } from "./Files.styles.js";
import Header from "../Header/Header.jsx";

function InboundFiles() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setSpin(true);
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <WrapDiv>
          Inbound<UpIcon spin={spin}></UpIcon>
        </WrapDiv>
        <table>
          <tr>
            <th>InboundFileKey</th>
            <th>UsKey</th>
            <th>UsCommonCode</th>
            <th>ThemKey</th>
            <th>ThemCommonCode</th>
            <th>Filename</th>
            <th>Plaintext</th>
            <th>ReceivedAt</th>
            <th>TransactionId</th>
            <th>Processed</th>
            <th>InboundFileId</th>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
          <tr>
            <td>25</td>
            <td>141</td>
            <td>CBSHS</td>
            <td>65</td>
            <td>CHSGH145</td>
            <td>THINKBRIDGE</td>
            <td>HELLO</td>
            <td>2021</td>
            <td>ASJ454</td>
            <td>YES</td>
            <td>5454SD</td>
          </tr>
        </table>
      </Wrapper>
    </>
  );
}

export default InboundFiles;
