function createSkillProgressBar(skillName, skillValue, skillColor, skillIcon) {
    let skillProgressBar = document.querySelector('.add-skill-progress-bar');
    skillProgressBar.innerHTML += `
                      <div class="mt-12 flex justify-center">
                        <div class="w-[50%] Responsive rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800">
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-blue-700 dark:text-white"><img class="w-6 h-6" src="${skillIcon}"> ${skillName}</span>
                                <span class="text-sm font-medium text-blue-700 dark:text-white">${skillValue}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[${skillColor}] h-2.5 rounded-full" style="width: ${skillValue}%"></div>
                            </div>
                        </div>
                      </div>
                                    `;
    return skillProgressBar;
}
window.onload = function() {
    let skills = [
        {
            name: 'HTML',
            value: 90,
            color: '#e34c26',
            icon: './image/icons8-html-64.png'
        },
        {
            name: 'CSS',
            value: 60,
            color: '#3c5a99',
            icon: './image/icons8-css-64.png'
        },
        {
            name: 'JavaScript',
            value: 20,
            color: '#f1e05a',
            icon: './image/icons8-js-file-64.png'
        },
        {
            name: 'PHP',
            value: 45,
            color: '#777',
            icon: './image/icons8-php-64.png'
        },
    ];
    skills.forEach(skill => {
        createSkillProgressBar(skill.name, skill.value, skill.color, skill.icon);
    });
};
















