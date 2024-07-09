import React from "react";
import { List, ActionPanel, Detail, Action } from "@raycast/api";

type Lecture = {
  classroom: string;
  class: string;
  time: string;
  instructor: string;
  className: string;
  imgSrc: string;
  classType: string;
  zoomLink?: string;
};

const LectureCard: React.FC<{ lecture: Lecture }> = ({ lecture }) => {
  return (
    <List.Item
      title={lecture.className}
      subtitle={lecture.class}
      icon={lecture.imgSrc}
      accessories={[
        { text: lecture.classType },
        { text: `${lecture.time} - ${lecture.classroom}` }
      ]}
      actions={
        <ActionPanel>
          <Action.Push
            title="Show Details"
            target={
              <Detail
                markdown={`# ${lecture.className}\n\n${lecture.instructor}\n\n${lecture.zoomLink ? `## Zoom Link:\n\n [Zoom Classroom ${lecture.classroom}](${lecture.zoomLink})` : ''}`}
                metadata={
                  <Detail.Metadata>
                    <Detail.Metadata.Label title="Class" text={lecture.class} />
                    <Detail.Metadata.Label title="Instructor" text={lecture.instructor} />
                    <Detail.Metadata.Label title="Type" text={lecture.classType} />
                    <Detail.Metadata.Label title="Time" text={lecture.time} />
                    <Detail.Metadata.Label title="Classroom" text={lecture.classroom} />
                  </Detail.Metadata>
                }
              />
            }
          />
        </ActionPanel>
      }
    />
  );
};

export default LectureCard;
