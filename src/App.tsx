import { Button } from "./components/Button";
import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

export function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-100 w-full h-[36rem] max-w-sm flex flex-col items-center">
        <img src="https://www.github.com/felipesanderp.png" alt="Felipe Sander" className="rounded-full h-32 w-32 my-3 p-1 ring-2 ring-gray-300 dark:ring-gray-500" />
        <span className="text-lg font-bold">@fespanisson</span>

        <Button
          href="https://github.com/felipesanderp"
          title="GitHub"
          icon={GithubLogo}
        />

        <Button
          href="https://www.linkedin.com/in/felipesander/"
          title="LinkedIn"
          icon={LinkedinLogo}
        />

        <Button
          href="https://www.instagram.com/fespanisson/"
          title="Instagram"
          icon={InstagramLogo}
        />
      </div>
    </div >
  )
}
