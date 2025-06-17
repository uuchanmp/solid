import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div><nav class="bg-slate-100 text-slate-900 px-4">
         <ul class="flex items-center">
           <li class="py-2 px-4"><a href="/" class="no-underline hover:underline">Home</a></li>
           <li class="py-2 px-4"><a href="/about" class="no-underline hover:underline">About</a></li>
           <li class="py-2 px-4"><a href="/blog" class="no-underline hover:underline">Blog</a></li>
           <li class="text-sm flex items-center space-x-1 ml-auto">
               <span>URL:</span>
                 <input class="w-75px p-1 bg-white text-sm rounded-lg" type="text" readOnly value={location.pathname}/></li>
        </ul>
       </nav>

      <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
      <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">Welcome to Our Team's App!</h1>
           <Suspense>{props.children}</Suspense></main></div>
     );
   };

export default App;
