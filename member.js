function skillsMember() {
    const member = document.querySelector('.member');
    const memberSkills = document.querySelector('.member__skills');
    const memberSkillsList = document.querySelector('.member__skills-list');
    const memberSkillsListItems = document.querySelectorAll('.member__skills-list-item');
    const memberSkillsListItemsArray = Array.from(memberSkillsListItems);
    const memberSkillsListItemsArrayLength = memberSkillsListItemsArray.length;
    
    member.addEventListener('click', (e) => {
        if (e.target.classList.contains('member__skills')) {
        memberSkills.classList.toggle('member__skills--active');
        }
    });
    
    memberSkillsListItemsArray.forEach((item, i) => {
        item.addEventListener('click', () => {
        memberSkillsListItemsArray.forEach((item) => {
            item.classList.remove('member__skills-list-item--active');
        });
        item.classList.add('member__skills-list-item--active');
        });
    });
    }