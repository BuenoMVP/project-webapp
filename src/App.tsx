import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

import { personalInfo } from "./utils/personalInfo";
import type { InfoProps } from "./utils/props";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {personalInfo.map((person: InfoProps) => (
          <Route 
            key={person.name}
            path={`/${person.url}`} 
            element={
              <Info 
                perfilImg={person.perfilImg}
                name={person.name}
                title={person.title}
                description={person.description}
                age={person.age}
                birthday={person.birthday}
                url={person.url}
                daysUntilBirthday={person.daysUntilBirthday}
                kisses={person.kisses}
                beers={person.beers}
                rejections={person.rejections}
              />
            } 
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
