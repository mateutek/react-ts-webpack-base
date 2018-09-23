const path = require('path');

module.exports = function (plop) {
    plop.addHelper('absPath', (p) => path.resolve(plop.getPlopfilePath(), 'src', p));
    plop.addPrompt('directory', require('inquirer-directory'));
    // component generator
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name please(write with spaces)'
            },
            {
                type: 'directory',
                name: 'path',
                message: 'Where would you like to put this component?',
                basePath: './src'
            },
            {
                type: 'list',
                name: 'componentType',
                message: 'choose component type please',
                choices: ['With State', 'Without State']
            }
        ],
        actions(answers) {
            let actions = [
                {
                    type: 'add',
                    path: '{{absPath path}}/components/{{properCase name}}/I{{properCase name}}.tsx',
                    templateFile: './configs/plop/interface.hbs',
                    abortOnFail: true
                },
                {
                    type: 'add',
                    path: '{{absPath path}}/components/{{properCase name}}/{{properCase name}}.scss',
                    templateFile: './configs/plop/style.hbs',
                    abortOnFail: true
                }
            ];

            if (answers.componentType === 'With State') {
                actions = actions.concat([
                    {
                        type: 'add',
                        path: '{{absPath path}}/components/{{properCase name}}/{{properCase name}}.tsx',
                        templateFile: './configs/plop/controllerState.hbs',
                    },
                ]);
            } else if (answers.componentType === 'Without State') {
                actions = actions.concat([
                    {
                        type: 'add',
                        path: '{{absPath path}}/components/{{properCase name}}/{{properCase name}}.tsx',
                        templateFile: './configs/plop/controllerNoState.hbs',
                    },
                ]);
            }

            return actions;
        }
    });
};
