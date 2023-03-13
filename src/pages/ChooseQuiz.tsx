import '../styles/choice.css'
const ChooseQuiz = () => {
  return (
    <div className="categories">
      <input type="checkbox" value="arts_and_literature" onClick={(e)=>console.log(e.target.value)}/>Arts and Literature
      <input type="checkbox" value="film_and_tv" />Film and TV
      <input type="checkbox" value="food_and_drink" />Food and Drink
      <input type="checkbox" value="general_knowledge" />General Knowledge
      <input type="checkbox" value="geography" />Geography
      <input type="checkbox" value="history" />History
      <input type="checkbox" value="music" />Music
      <input type="checkbox" value="science" />Science
      <input type="checkbox" value="society_and_culture" />Society and Culture
      <input type="checkbox" value="sport_and_leisure" />Sport and Leisure
      <input type="checkbox" value="all" />All of the above
    </div>
  );
};

export default ChooseQuiz;
