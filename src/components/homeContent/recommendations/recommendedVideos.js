import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Web Development - From Beginner to Advanced"}
        imgSrc={"https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"}
        instructor={"Kyle Pew, Office Newb LLC"}
        rating={4.6}
        noOfStudents={"(166,042)"}
       
      />
      <VideoCard
        courseTitle={"The Complete React js Course - From Beginner to Advanced"}
        imgSrc={"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW"}
        instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
        rating={4.4}
        noOfStudents={"(116,637)"}
        
      />
      <VideoCard
        courseTitle={
          "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
        }
        imgSrc={"https://www.webdschool.com/img/ios-app-development.jpg"}
        instructor={"Dr. Anglea Yu"}
        rating={4.8}
        noOfStudents={"(49,923)"}
       
      />
      <VideoCard
        courseTitle={
          "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu4a5lkNjnHIfXudw2xXb8dU_CpDmY95oww&usqp=CAU"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        
      />

      <VideoCard
        courseTitle={
          "AWS Course – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://sumanit.com/wp-content/uploads/2022/05/Amazon-AWS-1.png"}
        instructor={"Nitin Rao"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        
      />


      <VideoCard
        courseTitle={
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
        }
        imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVwHqydYSWH2vvoaD4QQfQxwjTFGOh0KuJg&usqp=CAU"}
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
       
      />
    </div>
  );
}

export default RecommendedVideos;