-- CONSIDERO QUE EL CAMPO ANUAL_ADJUSTMENT ES UN FACTOR PORCENTUAL, POR ESO APLICO ESA FORMULA 
-- PARA CALCULAR EL NUEVO SUELDO
UPDATE employees
        INNER JOIN
    company.countries countries ON employees.country_id = countries.id
        INNER JOIN
    company.continents continents ON countries.continent_id = continents.id 
SET 
    salary = (1 + (anual_adjustment) / 100) * salary
WHERE
    salary <= 5000;