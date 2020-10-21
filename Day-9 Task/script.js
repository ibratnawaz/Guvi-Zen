let header = document.querySelector('.header');

let content_1 = document.createElement('div');
content_1.setAttribute('class', 'content-1');
content_1.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/78.jpg" class="profile-image" alt="">
    <div class="above">
        <div class="profile-strip"></div>
        <div class="profile-name">Francis Gilbert</div>
    </div>
`;

let content_2 = document.createElement('div');
content_2.setAttribute('class', 'content-2');
content_2.innerHTML = `
    <div class="profile-contact">N. Damen Avenue, Chicago 99999 | 999-999-9999 
        | dummy@gmail.com | www.myblog.com
    </div>
`;


header.appendChild(content_1);
header.appendChild(content_2);


let main = document.querySelector('.main');

let container_left = document.createElement('div');
container_left.setAttribute('class', 'container-left');
container_left.innerHTML = `
    <div class="user-intro container-margin-top">
    <div class="icon">
        <div class="icon-border">
            <div class="user-icon">
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
        <div class="intro-heading">Profile</div>
    </div>
    <div class="intro-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisi non congue
            placerat,
            enim risus posuere ex, a viverra urna magna vel purus. Nam dictum accumsan sollicitudin.
            Suspendisse
            nulla massa, feugiat sit amet rutrum eget, egestas sed felis. Maecenas lorem augue, semper
            volutpat
            justo quis, egestas vulputate orci.
        </p>
    </div>
    </div>

    <div class="user-skills container-margin-top">
    <div class="icon">
        <div class="icon-border">
            <div class="skill-icon">
                <i class="fa fa-filter" aria-hidden="true"></i>
            </div>
        </div>
        <div class="skills-heading">Skills</div>
    </div>
    <div class="skills-text">
        <h4>Technical Skills</h4>
        <div class="tech-skills">
            <div class="skill-row">
                <div class="skill-name">HTML</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-html"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">CSS</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-css"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Javascript</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-js"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">React</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-react"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Redux</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-redux"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Mongo</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-mongo"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">MySql</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-mysql"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
        </div>
        <h4>Additional Skills</h4>
        <div class="additional-skills">
            <div class="skill-row">
                <div class="skill-name">Project Management</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-pm"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Recruitment</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-rcm"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Business Development</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-bdm"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Editing</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-edit"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
            <div class="skill-row">
                <div class="skill-name">Fundraising</div>
                <div class="skill-bar">
                    <div class="skills skill-bar-fund"></div>
                    <div class="skill-circle"></div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div class="user-exp container-margin-top">
    <div class="icon">
        <div class="icon-border">
            <div class="exp-icon">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
            </div>
        </div>
        <div class="exp-heading">Work Experience</div>
    </div>
    <div class="work-exp">
        <div class="title-datetime">
            <h4>Event Manager</h4>
            <p>03/2014 - 02/2017</p>
        </div>
        <p>C3 Presents, Washington DC</p>
        <ul>
            <li>Donec nulla nisi, aliquam malesuada libero vel, fringilla rhoncus nibh. Nullam porta tellus
                eu dui</li>
            <li>Duis in laoreet sem. Integer vulputate eros eget metus blandit imperdiet.</li>
            <li> Nulla condimentum justo quis justo sodales accumsan. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.</li>
        </ul>
    </div>
    </div>
`;

let container_divider = document.createElement('div');
container_divider.classList.add('container-divider');

let container_right = document.createElement('div');
container_right.setAttribute('class', 'container-right');
container_right.innerHTML = `
    <div class="user-exp container-margin-top">
    <div class="icon">
        <div class="icon-border">
            <div class="exp-icon">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
            </div>
        </div>
        <div class="exp-heading">Work Experience</div>
    </div>
    <div class="work-exp">
        <div class="title-datetime">
            <h4>Event Manager</h4>
            <p>03/2014 - 02/2017</p>
        </div>
        <p>C3 Presents, Washington DC</p>
        <ul>
            <li>Donec nulla nisi, aliquam malesuada libero vel, fringilla rhoncus nibh. Nullam porta tellus
                eu dui</li>
            <li>Duis in laoreet sem. Integer vulputate eros eget metus blandit imperdiet.</li>
            <li> Nulla condimentum justo quis justo sodales accumsan. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.</li>
        </ul>
    </div>
    </div>

    <div class="user-edu container-margin-top">
    <div class="icon">
        <div class="icon-border">
            <div class="edu-icon">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
        </div>
        <div class="edu-heading">Education</div>
    </div>
    <div class="education">
        <div class="title-datetime">
            <h4>Engineering Immersion Program</h4>
            <p>11/2018 - 06/2018</p>
        </div>
        <p>Thinkful, Chicago IL</p>
        <p>Donec non elementum odio, dignissim venenatis lectus. Cras ac quam nisi. Duis vel maximus est.
            Duis eu eros tincidunt, rutrum odio accumsan, semper erat. Nulla facilisi. Etiam elementum
            mattis libero</p>
        <ul>
            <li>Maecenas pulvinar neque a elementum lobortis. Etiam in mi nisl. Aenean rhoncus cursus nisl
                eget volutpat. Etiam massa nunc, faucibus nec ex ut, sagittis varius arcu. Integer nec lacus
                ut risus ultricies</li>
            <li>Ut at velit convallis tellus lacinia molestie. Duis nibh ex, mattis quis congue non,
                pellentesque sit amet ex. Sed venenatis nibh non mi suscipit fermentum. Cras et aliquam
                neque, quis pretium felis. Curabitur sagittis diam turpis, non euismod metus fringilla
                tempor.</li>
            <li>Nam scelerisque sem in augue gravida, eu volutpat lectus convallis. Nullam eget justo et
                purus semper congue. Ut ornare, augue eu mollis varius, felis neque fermentum purus, non
                blandit enim ante vitae urna. Mauris dictum commodo sem, finibus ullamcorper neque suscipit
                dignissim. </li>
        </ul>
    </div>

    <div class="education">
        <div class="title-datetime">
            <h4>BA, English</h4>
            <p>09/2001 - 09/2005</p>
        </div>
        <p>University of California, Los Angelas</p>
        <p> Ut id nisl vel ante volutpat aliquet. Morbi id egestas tortor.</p>
    </div>
    </div>
`;


main.appendChild(container_left);
main.appendChild(container_divider);
main.appendChild(container_right);