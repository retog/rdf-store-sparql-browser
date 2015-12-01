var SparqlStore = require('rdf-store-sparql');
if (typeof window !== 'undefined') {
    window.SparqlStore = LdpStore;
}