Feature: Login

Scenario: Login válido
  Given Acesso a página de login "https://the-internet.herokuapp.com/login"
  When preencho o campo de username "tomsmith" e password "SuperSecretPassword!"
  And clico no botão de login
  Then devo ver a mensagem "You logged into a secure area!"
  And clico no botão de logout
  Then devo ver a mensagem "You logged out of the secure area!"

Scenario: Login vazio
  Given Acesso a página de login "https://the-internet.herokuapp.com/login"
  When preencho o campo de username "" e password ""
  And clico no botão de login
  Then devo ver a mensagem "Your username is invalid!"

Scenario: Login com username inválido  e password válido
  Given Acesso a página de login "https://the-internet.herokuapp.com/login"
  When preencho o campo de username "tomsmith" e password ""
  And clico no botão de login
  Then devo ver a mensagem "Your password is invalid!"

Scenario: Login com username válido e password inválido
  Given Acesso a página de login "https://the-internet.herokuapp.com/login"
  When preencho o campo de username "" e password "SuperSecretPassword!"
  And clico no botão de login
  Then devo ver a mensagem "Your username is invalid!"
