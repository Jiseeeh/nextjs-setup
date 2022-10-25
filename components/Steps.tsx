import React from "react";

import Command from "./Command";

const Steps: React.FC = () => {
  return (
    <section className="pb-3 text-secondary grid md:grid-cols-2 gap-5 bg-primary ">
      <ul className=" steps steps-vertical md:justify-self-end md:-mt-10">
        <li className="step step-accent">Create Next App</li>
        <li className="step step-accent">Install and Initialize Tailwind</li>
        <li className="step step-accent">Add paths to your config</li>
        <li className="step step-accent">
          Add tailwind directives to your css
        </li>
        <li className="step step-accent">Install daisyUI </li>
        <li className="step step-accent">
          Add daisyUI to your config as a plugin
        </li>
      </ul>
      <section className="grid gap-5 md:gap-10 overflow-hidden">
        {/* Step 1 */}
        <h1 className="ml-3 md:hidden">Create Next App</h1>
        <section className="mockup-code code-block">
          <pre data-prefix="$">
            <code>
              <Command content="npx" /> create-next-app@latest{" "}
              <Command content="appName" /> && cd appName
            </code>
          </pre>
        </section>
        {/* Step 2*/}
        <h1 className="ml-3 md:hidden">Install and Initialize Tailwind</h1>
        <section className="mockup-code code-block">
          <pre data-prefix="$">
            <code>
              <Command content="npm" /> install{" "}
              <Command isFlag={true} content="-D" /> tailwindcss postcss
              autoprefixer
            </code>
          </pre>
          <pre data-prefix="$">
            <code>
              <Command content="yarn" /> add{" "}
              <Command isFlag={true} content="--dev" /> tailwindcss postcss
              autoprefixer
            </code>
          </pre>
          <br />
          <pre data-prefix=">"># Init</pre>
          <pre data-prefix="$">
            <code>
              <Command content="npx" /> tailwindcss init{" "}
              <Command isFlag={true} content="-p" />
            </code>
          </pre>
        </section>
        {/* Step 3 */}
        <h1 className="ml-3 md:hidden">Add paths to your config</h1>
        <section className="mockup-code code-block ">
          <pre data-prefix=">">
            <code className="text-error">`tailwind.config.js`</code>
          </pre>
          <br />
          <pre data-prefix="1">
            <code>{`module.exports = {`}</code>
          </pre>
          <pre data-prefix="2">
            <code>{`\tcontent: [\n`}</code>
          </pre>
          <pre data-prefix="3">
            <code>{`\t\t"./pages/**/*.{js,ts,jsx,tsx}",\n`}</code>
          </pre>
          <pre data-prefix="4">
            <code>{`\t\t"./components/**/*.{js,ts,jsx,tsx}",\n`}</code>
          </pre>
          <pre data-prefix="5">
            <code>{`\t\t// you can add other paths here.\n`}</code>
          </pre>
          <pre data-prefix="6">
            <code>{`],`}</code>
          </pre>
        </section>
        {/* Step 4 */}
        <h1 className="ml-3 md:hidden">Add tailwind directives to your css</h1>
        <section className="mockup-code code-block ">
          <pre data-prefix=">">
            <code className="text-error">`globals.css`</code>
          </pre>
          <br />
          <pre data-prefix="1">
            <code>@tailwind base;</code>
          </pre>
          <pre data-prefix="2">
            <code>@tailwind components;</code>
          </pre>
          <pre data-prefix="3">
            <code>@tailwind utilities;</code>
          </pre>
        </section>
        {/* Step 5 */}
        <h1 className="ml-3 md:hidden">Install daisyUI</h1>
        <section className="mockup-code code-block">
          <pre data-prefix="$">
            <code>
              <Command content="npm" /> install daiyui
            </code>
          </pre>
          <pre data-prefix="$">
            <code>
              <Command content="yarn" /> add daiyui
            </code>
          </pre>
        </section>
        {/* Step 6 */}
        <h1 className="ml-3 md:hidden">
          Add daisyUI to your config as a plugin
        </h1>
        <section className="mockup-code code-block ">
          <pre data-prefix=">">
            <code className="text-error">`tailwind.config.js`</code>
          </pre>
          <br />
          <pre data-prefix="1">
            <code>{`module.exports = {`}</code>
          </pre>
          <pre data-prefix="2">
            <code>{`\tplugins: [require("daisyui")],`}</code>
          </pre>
          <pre data-prefix="3">
            <code>{`}`}</code>
          </pre>
        </section>
      </section>
    </section>
  );
};

export default Steps;