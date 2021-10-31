
import ChoiceComponent from "../../components/ChoiceComponent";
let bread =
  "https://s3-alpha-sig.figma.com/img/9c69/7695/7bc08fbee8fd6d88eaebc2d9383fbca2?Expires=1636329600&Signature=acMnKxyWWIEvqRRLOCvWMkIX4cna0nXfJg9WQzDWW4FntqHPa3~xo5v7Bq4vmZ2qrtCFhwxySNLwhktKux1L7Inu-mg0EdMI8JepADC4J4iakXRShrEAyxiLmAhKnN4HcyM-xD-KLNVH9hx0hbE0Iua2YuTXBiMnfmmGLWQ~uLjugMVKXII8U-iylYUF7Mn4H~xWJTmrZ0p-DhFFAIiXJyS3LLIxYYo97bIIcefGMwhEy3evoxLq~qTuQg4JqXKUvtn4Srpim06Kt0VvWnpcZQGNUwJRzms0-GVj69KPvyi8X2~mM8nUDG9OcYEj9uU7BDQ-unEMEybMeDf4DdU38Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
let wrap =
  "https://s3-alpha-sig.figma.com/img/49f3/f9ac/c75c8cb5d264b671ca3f6b40edb5e6d5?Expires=1636329600&Signature=GcCEV6ItIJUAmFMawx-1MT83Hc2tTnM-36Mjr-~0qLiv7BXK1iRizrIQJGNF9hqbV-ROfZfJVJNIwBEUy3jujAPs3i0JX3r7JARV3sGjTN~nfVQmAtZu9EFmvZWxVQ1h11O8csBYHkIEf5moVdopzIA1crM3jtPQkLV0pAVJurERlUanjJatqP75UCG0GmcPdsEHOgUCQeJC2M8y4VxYKgahTlMGkzoknjXs9x4zWR~VrEZG85z-W-ehrqO0DDKUu31EhhDx6JrrKnOb-egHq5qwSmMILQhVYPxOiiJhXJ22aFljz7RgjZuFLLWS0GSDI-Ad1kj4lf0~Pdvvz00wng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

const btnData = [
    {img: bread, label: 'Pain', btnId: 'bread'},
    {img: wrap, label: 'Galette', btnId: 'wrap'},
]
const BreadChoice = () => {
   
  return (
    <ChoiceComponent title='Pain ou Galette' link="/choice-meat" buttonChoice={btnData} />
  );
};

export default BreadChoice;
