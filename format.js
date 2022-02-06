const formatData =(res)=>{
    const word = res.data.id;
    const classification = res.data.results[0].lexicalEntries[0].lexicalCategory.id;
    const provider = res.data.metadata.provider
    const definition = res.data.results[0].lexicalEntries[0].entries[0].senses.map((def, i) =>
    {
            return `${i+1} ${def.definitions}`
    })

    const newLineDef = definition.join(",").replace(/,/g,"\n");
    console.log(`${word} ${classification}\n\n${newLineDef}\n\nProvided by:${provider}`);  
}

module.exports = formatData