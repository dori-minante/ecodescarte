# Controle de versão

**Git** é um histórico de alterações guardado nesta pasta. **GitHub** é um serviço opcional que pode guardar uma cópia desse histórico na internet. O repositório local existe mesmo sem GitHub.

Uma **branch** é uma linha de trabalho: permite construir uma parte sem misturar tudo imediatamente. `main` representa versão estável; `develop` reúne o que foi validado antes da versão final.

| Branch | Objetivo | Resultado |
|---|---|---|
| main | versão estável | versão final para demonstração |
| develop | integração | funcionalidades reunidas |
| feature/backend | API | dados, CEP e testes implementados |
| feature/frontend | interface | telas e jornada implementadas |
| feature/integracao | integração | correções e pacote de produção |
| feature/ux | usabilidade | revisão de linguagem e celular |
| docs/documentacao | documentação | guias e evidências |

## Evolução registrada

Os commits principais são `chore: initialize project structure`, `feat: implement ecopoint backend api`, `feat: build waste search experience`, os commits de integração e os de documentação. As branches de funcionalidade são unidas com merge em `develop`; ao fim, `develop` é unido a `main` e recebe a etiqueta `v1.0.0`.

Para enxergar a prova dessa evolução, use no terminal:

```powershell
git log --oneline --graph --decorate --all
git branch -a
```

O primeiro mostra os commits em forma de árvore. O segundo mostra as linhas de trabalho. Se quiser criar uma cópia privada no GitHub, crie um repositório privado pelo site, copie a URL dele e execute:

```powershell
git remote add origin https://github.com/SEU_USUARIO/ecodescarte.git
git push -u origin main
```

Troque apenas `SEU_USUARIO` pelo seu nome de usuário real. Não use `git push --force` e nunca envie arquivos com senhas.
