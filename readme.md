# OOP

    Denna repo har två delar del 1 är en färg format omvandlare. Del 2 är ett poker spel. 
    Båda applikatioerna är uppgyda med OOP. Del 1 använder den äldre prototypbaserade 
    syntaxen och poker spelet använder den modernare syntaxen från es6. 

## Funktionaliteter 

Del 1 
    - Omvandla RGB till hex
    - Omvandla RGB till RGBA
    - Omvandla RGB till hsl
Del 2
    - Välja antal rundor och antal spelare
    - Skapa en kortlek som hanteras av en dealer
    - Blanda kortleken och dela ut 5 st kort till spelarna 
    - Slängrunda där spelarna kan slänga två kort och plocka upp två nya

## Teknologier
    - javascript
    - Css
    - Vite
    - HTML

### styrkor

 #### Del 1
    Del 1 är en liten applikation mede relativte lite kod. Med mindre kod så blir det 
    enklare att undvika svagheter. 

 #### Del 2 
    Del 2 är en applikation med en större mängd kod relativt till del 1. 
    Projektet är uppdelat på så sätt att varje klass har en egen fil. 
    Jag har försökt att undvika att skapa metoder som gör allt för mycket och istället 
    försökt dela upp funktionaliteter till fler metoder och klasser.
    Jag har använt mig av menigsfulla namn för classer, metoder och varibaler. 




### Svagheter

 #### Del 1
    Då del 1 är ett relativt litet projekt och instruktionerna för projekt var
    konkreta så är det svårt att identifiera svagheter. 

 #### Del 2
    Jag tyckte att consolen på browsern inte var till räkligt bra så jag skapa en UI. 
    Då detta projekt är ett console baserat spel så har jag inte fokuserat så mycket
    på UI:n och det syns i spelet.

    Validerinegn för användar input är begränsad och finns inte för alla input senarios. 
    Dokumenterinegn av koden kunnde vara bättre bland annat med hjälp av komentarer. 

    Validerings classen innehåller statiska metoder. Alla metoders syften är validering 
    dock så validerar dem väldigt olika saker och kanske inte borde tillhöra samma klass. 
   