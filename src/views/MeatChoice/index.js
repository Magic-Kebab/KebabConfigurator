
import ChoiceComponent from "../../components/ChoiceComponent";
let meat =
  "https://s3-alpha-sig.figma.com/img/0cb1/8554/a3fb2a52f5a002122962d58ad2cc9314?Expires=1636329600&Signature=YpZp4kVkl-Mb7vYXxsQ7rVHkdlsQiIfEsZb~ijXL5dc0UiJXbxnK0SBAyPB9njYfIuFEH85ReNyhLKPMtJo5qDdgJCLMn~Bi9YTsDZjNYce4qfTHypwP91m3WJ8Plpas9hjCkBKmPMOXLnqCmxzLaoWlfvQGRtCo-GxrAb42wQXjgLdm-RlTCVDeRs4MKX-tVffsmIx9k9~tf8ZtI1Ti6a5VpIyX-KYrgPcbIi2eaSdSFB8C1E75VYnyCXmc0QM-hZ0R-liM2NPF47i12oVnn17ADHgykVXI5hX-39Kr7Lkc9yuXiy2Skw15SvkpN5VO2rpwazbsNxMMey4ctDvtNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
let tofu =
  "https://s3-alpha-sig.figma.com/img/8199/e509/b82fa51f4748372692bad3d6c8ce317c?Expires=1636329600&Signature=aOgM923J2RnKSWByNB1~MynW8jR0Z0Qvh1QnqD3Ab-gi-eok4AUbI8tt~8dNoUbGcrQIBpvj2dBSRnSXI5IkGIz7iTJfvuT1mwT~yMQqeqQ5AQjKsBpr8g9gvUL9SDmJhgu1OAVqrXMA4sclrOqStELWlRbhWX27CzDwNa0btMMvwIUHjpldN5zxKSfvcuAIPQ1p8y7DPQDXPmnkV-jcdWF09R-lrAoxFsQUPM54d3ddttba-OoneaIylDThnVDJ2Bu7tt0K3GK5~aNyNnC9l8V9Xg~mq~b9KmdhP4nVrcGRIe~qp7HItg~~AsL82D5rYE9y-XQLQ73umhyht1-PYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  // donnée des bouttons utiliser sous object
const btnData = [
    {img: meat, label: 'Viande', btnId: 'meat'},
    {img: tofu, label: 'Tofu', btnId: 'tofu'},
]
const MeatChoice = () => {
   
  return (
    <ChoiceComponent title='Viande ou Tofu' link="/choice-meat" buttonChoice={btnData} />
  );
};

export default MeatChoice;
