import React, { useContext, useState, useEffect } from 'react';


const QuestionsContext = React.createContext();

const useQuestionsContext = () => useContext(QuestionsContext);


const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
}

useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
        .then(res => res.json())
        .then(data => setQuestions(data.results));
  }, []);

  return (
    <AuthQuestions.Provider value={value}>
      {children}
    </AuthQuestions.Provider>
  );
};

export { useAuthContext, QuestionsProvider };