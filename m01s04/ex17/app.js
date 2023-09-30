var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`
Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);
var message = 'Siteul foloseste urmatoarele servicii: ';

for (var i = 0; i < services.length; i++) {
  var punctuation = ', ';

  if (i === services.length - 2) {
    punctuation = ' si ';
  }

  if (i === services.length - 1) {
    punctuation = '.';
  }

  message += services[i].name + punctuation;
}
console.log(message);

console.warn(`
Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”
`);
var adoptedAfter2020 = [];

for (var i = 0; i < services.length; i++) {
  if (services[i].adoption >= 2020) {
    adoptedAfter2020.push(services[i].name);
  }
}

var message =
  'Serviciile ' +
  adoptedAfter2020.join(', ') +
  ' au fost adoptate dupa 2020 inclusiv.';
console.log(message);

console.warn(`
Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);
for (var i = 0; i < services.length; i += 2) {
  var serviceName = services[i].name;
  var adoptionYear = services[i].adoption;
  console.log(
    'Serviciul se numeste ' +
      serviceName +
      ' si a fost integrat in ' +
      adoptionYear +
      '.',
  );
}

console.warn(`
Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”
`);
var currentYear = new Date().getFullYear();

for (var i = 0; i < services.length; i++) {
  var serviceName = services[i].name;
  var yearsInUse = currentYear - services[i].adoption;
  console.log(
    'Siteul foloseste serviciul ' + serviceName + ' de ' + yearsInUse + ' ani.',
  );
}

console.warn(`
Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);
var oldestService = services[0];

for (var i = 1; i < services.length; i++) {
  if (services[i].adoption < oldestService.adoption) {
    oldestService = services[i];
  }
}

var currentYear = new Date().getFullYear();
var serviceName = oldestService.name;
var yearsInUse = currentYear - oldestService.adoption;

console.log('Folosim ' + serviceName + ' de ' + yearsInUse + ' ani.');
