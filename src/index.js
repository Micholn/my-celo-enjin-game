const enjin = require('./helpers/enjin');
const kit = require('./helpers/celo');

const assetData = {
    name: 'Excalibur',
    initialReserve: 1000,
    supplyModel: 'set',
    meltValue: 10,
};

enjin.assets.createAsset(assetData)
    .then(response => {
        console.log(response);

        const tx = kit.connection.newTransactionBuilder()
            .from('<YOUR_CELO_ADDRESS>')
            .to('<GAME_CONTRACT_ADDRESS>')
            .withValue(response.asset.assetId)
            .build();

        kit.connection.sendTransaction(tx)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
