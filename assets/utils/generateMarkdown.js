// rendering license badge
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-red)]";
    case "Mozilla Public License 2.0":
      return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-green)]";
    case "BSD 3-Clause License":
      return "[![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3_Clause-orange)]";
    case "Apache License 2.0":
      return "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow)]";
    case "GNU General Public License (GPL) v3":
      return "[![License: GNU General Public License (GPL) v3](https://img.shields.io/badge/License-GNU_General_Public_(GPL)_v3-pink)]";
    default:
      return "";
  }
}

// rendering license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/license/MIT";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/license/mpl-2-0";
    case "BSD 3-Clause License":
      return "https://opensource.org/license/bsd-3-clause";
    case "Apache License 2.0":
      return "https://opensource.org/license/apache-2-0";
    case "GNU General Public License (GPL) v3":
      return "https://opensource.org/license/agpl-v3";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (!license) return "";
  return `## License\n
  ${renderLicenseBadge(license)}\n
  
  `
}

// generated README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  
  # 🔥 ${data.projectTitle} 🔥  

  ## 📖 Description 📖
  ${data.projectDescription}

  ## 📋 Table of Contents 📋
  👉 [Description](#Description)
  👉 [Installation](#Installation)
  👉 [Usage](#Usage)
  👉 [License](#License)
  👉 [Contributors](#Contributors)
  👉 [Tests](#Tests)
  👉 [Questions](#Questions)

  ## 🛠️ Installation 🛠️
  ${data.projectInstallationInstructions}

  ## 🖱️ Usage 🖱️
  ${data.projectUsageInformation}

  ## 🤝🏽 Contributors 🤝🏽
  ${data.projectContributorInformation}

  ## 💯 Tests 💯
  ${data.testInstructions}

  ## 😵‍💫 Questions 😵‍💫
  Come drop by on GitHub! (https://github.com/${data.githubUsername})
  ORRR...
  Feel free to email with any questions at ${data.email}
  
  ## LICENSE
  ${data.license}
  `;
}

module.exports = generateMarkdown;