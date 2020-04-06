import React from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import draftToHtml from "draftjs-to-html";
import "./PostView.scss";

export const PostView = ({ docs }) => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-10">
          <h1>Documents</h1>
        </div>
        <div className="col-2">
          <button
            className="Btn Btn--primary"
            onClick={() => history.push("/editDoc")}
          >
            Add New
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          {_.map(docs, (doc) => {
            return (
              <div className="Card" key={doc.title}>
                <h1 className="Card__title">{doc.title}</h1>
                <div className="Card__code mt-4">
                  {ReactHtmlParser(draftToHtml(doc.editorState))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  docs: state.documents,
});
export const connectedPostView = connect(mapStateToProps)(PostView);
