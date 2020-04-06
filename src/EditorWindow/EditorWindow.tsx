import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { connect } from "react-redux";
import { saveDocs } from "../store/action";
import { EditorState, convertToRaw } from "draft-js";
import "./EditorWindow.scss";
import { useHistory } from "react-router-dom";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Icofont from "react-icofont";

const EditorWindow = ({ saveDocs }) => {
  const [docTitle, setdocTitle] = React.useState("");
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const ref = React.useRef<HTMLInputElement>(null);
  const history = useHistory();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const saveDocument = () => {
    const metaData = {
      title: docTitle,
      editorState: convertToRaw(editorState.getCurrentContent()),
    };
    saveDocs(metaData);
    history.push("/");
  };
  console.log();
  return (
    <div className="Editor">
      <div className="row">
        <div className="col-12">
          <div className="Editor__main">
            <div className="Editor__header">
              <button
                className="Btn Btn--navigation"
                onClick={() => history.push("/")}
              >
                <Icofont icon="rounded-left" />
              </button>

              <div className="container d-flex align-items-center">
                <input
                  type="text"
                  className="Editor__docname"
                  placeholder="Untitled Document"
                  ref={ref}
                  value={docTitle}
                  onChange={(e) => setdocTitle(e.target.value)}
                />
                <button
                  className="Btn Btn--primary"
                  disabled={docTitle.length === 0}
                  onClick={saveDocument}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="Editor__wrapper">
              <div
                className="container"
                style={{ height: window.innerHeight - 80 + "px" }}
              >
                <Editor
                  toolbar={{
                    inline: {
                      inDropdown: false,
                      options: ["bold", "italic", "underline"],
                    },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: false },
                    link: { inDropdown: true },
                    history: { inDropdown: false },
                    image: true,
                    embedded: true,
                    blockType: { inDropdown: true },
                  }}
                  editorState={editorState}
                  wrapperClassName="EditorTool h-100"
                  editorClassName="EditorTool__content"
                  toolbarClassName="EditorTool__toolbar"
                  onEditorStateChange={(editorState) =>
                    setEditorState(editorState)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const connectedEditotWindow = connect(null, { saveDocs })(EditorWindow);
