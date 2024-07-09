import React, { useEffect, useState } from "react";
import { List, showToast, Toast } from "@raycast/api";
import { fetchLectures } from "./scrape";
import LectureCard from "./Lecture";

type Lecture = {
  classroom: string;
  class: string;
  time: string;
  instructor: string;
  className: string;
  imgSrc: string;
  classType: string;
};

export default function Command() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLectures = async () => {
      try {
        const lectures = await fetchLectures();
        setLectures(lectures);
      } catch (err) {
        showToast(Toast.Style.Failure, "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    loadLectures();
  }, []);

  return (
    <List isLoading={isLoading}>
      {lectures.map((lecture, index) => (
        <LectureCard key={index} lecture={lecture} />
      ))}
    </List>
  );
}
