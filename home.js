async function loadWeb3()
{
    if (window.ethereum)
    {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}
async function load()
{
    await loadWeb3();
}
load();
[...document.querySelectorAll('.menu-button')].forEach(function(item){
    item.addEventListener('click', function()
    {
        document.querySelector('.app-left').classList.add('show');
    });
});
[...document.querySelectorAll('.close-menu')].forEach(function(item){
    item.addEventListener('click', function()
    {
        document.querySelector('.app-left').classList.remove('show');
    });
});
$("#searchButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#transferSuccess").css("display", "none");
    $("#transferDanger").css("display", "none");
    $("#registerAppMain").css("display", "none");
    $("#transferAppMain").css("display", "none");
    $("#teamAppMain").css("display", "none");
    $("#searchAppMain").css("display", "block");
    $(this).addClass('active').siblings().removeClass('active');
    if(document.querySelector('.app-left').classList.contains('show'))
    {
        document.querySelector('.app-left').classList.remove('show');
    }
});
$("#registerButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#transferSuccess").css("display", "none");
    $("#transferDanger").css("display", "none");
    $("#searchAppMain").css("display", "none");
    $("#transferAppMain").css("display", "none");
    $("#teamAppMain").css("display", "none");
    $("#registerAppMain").css("display", "block");
    $(this).addClass('active').siblings().removeClass('active');
    if(document.querySelector('.app-left').classList.contains('show'))
    {
        document.querySelector('.app-left').classList.remove('show');
    }
});
$("#transferButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#transferSuccess").css("display", "none");
    $("#transferDanger").css("display", "none");
    $("#searchAppMain").css("display", "none");
    $("#registerAppMain").css("display", "none");
    $("#teamAppMain").css("display", "none");
    $("#transferAppMain").css("display", "block");
    $(this).addClass('active').siblings().removeClass('active');
    if(document.querySelector('.app-left').classList.contains('show'))
    {
        document.querySelector('.app-left').classList.remove('show');
    }
});
$("#teamButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#transferSuccess").css("display", "none");
    $("#transferDanger").css("display", "none");
    $("#searchAppMain").css("display", "none");
    $("#registerAppMain").css("display", "none");
    $("#transferAppMain").css("display", "none");
    $("#teamAppMain").css("display", "block");
    $(this).addClass('active').siblings().removeClass('active');
    if(document.querySelector('.app-left').classList.contains('show'))
    {
        document.querySelector('.app-left').classList.remove('show');
    }
});
var map;
var initialize = function()
{
    map = new google.maps.Map(document.getElementById("map-canvas"),{zoom: 15,center:{lat: 23.507406496208002, lng: 77.42684117053216},mapTypeId: "hybrid",});
};
window.initialize = initialize;
function getScrollHeight(elm)
{
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
}
document.addEventListener('input', function({target:elm}){
    if(!elm.classList.contains('autoExpand')||!elm.nodeName=='TEXTAREA')
    {
        return;
    }
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm);
    elm.rows = minRows;
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16);
    elm.rows = minRows + rows;
});
document.getElementById("addLandForm").addEventListener("submit", function(event){
    event.preventDefault();
    $("#registerSuccess").css('display', 'none');
    var surveyNo = $("#surveyNoRegister").val();
    var street = $("#streetRegister").val();
    var area = $("#areaRegister").val();
    var cityTown = $("#cityTownRegister").val();
    var state = $("#stateRegister").val();
    var pin = $("#pinRegister").val();
    var country = $("#countryRegister").val();
    var region = $("#regionRegister").val();
    web3.eth.getAccounts().then(function(acc){
        accounts = acc;
        var landregistryContract = new web3.eth.Contract([{"inputs":[{"internalType":"string","name":"surveyNo","type":"string"},{"internalType":"string","name":"street","type":"string"},{"internalType":"string","name":"area","type":"string"},{"internalType":"string","name":"cityTown","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"pin","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"region","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"area","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cityTown","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"country","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pin","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"region","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"street","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"surveyNo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
        var landregistry = landregistryContract.deploy({
            data: '0x60806040523480156200001157600080fd5b506040516200138238038062001382833981810160405281019062000037919062000388565b620000576200004b6200012d60201b60201c565b6200013560201b60201c565b87600290805190602001906200006f9291906200025a565b508660039080519060200190620000889291906200025a565b508560049080519060200190620000a19291906200025a565b508460059080519060200190620000ba9291906200025a565b508360069080519060200190620000d39291906200025a565b508260079080519060200190620000ec9291906200025a565b508160089080519060200190620001059291906200025a565b5080600990805190602001906200011e9291906200025a565b505050505050505050620006cd565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200026890620005de565b90600052602060002090601f0160209004810192826200028c5760008555620002d8565b82601f10620002a757805160ff1916838001178555620002d8565b82800160010185558215620002d8579182015b82811115620002d7578251825591602001919060010190620002ba565b5b509050620002e79190620002eb565b5090565b5b8082111562000306576000816000905550600101620002ec565b5090565b6000620003216200031b8462000572565b62000549565b90508281526020810184848401111562000340576200033f620006ad565b5b6200034d848285620005a8565b509392505050565b600082601f8301126200036d576200036c620006a8565b5b81516200037f8482602086016200030a565b91505092915050565b600080600080600080600080610100898b031215620003ac57620003ab620006b7565b5b600089015167ffffffffffffffff811115620003cd57620003cc620006b2565b5b620003db8b828c0162000355565b985050602089015167ffffffffffffffff811115620003ff57620003fe620006b2565b5b6200040d8b828c0162000355565b975050604089015167ffffffffffffffff811115620004315762000430620006b2565b5b6200043f8b828c0162000355565b965050606089015167ffffffffffffffff811115620004635762000462620006b2565b5b620004718b828c0162000355565b955050608089015167ffffffffffffffff811115620004955762000494620006b2565b5b620004a38b828c0162000355565b94505060a089015167ffffffffffffffff811115620004c757620004c6620006b2565b5b620004d58b828c0162000355565b93505060c089015167ffffffffffffffff811115620004f957620004f8620006b2565b5b620005078b828c0162000355565b92505060e089015167ffffffffffffffff8111156200052b576200052a620006b2565b5b620005398b828c0162000355565b9150509295985092959890939650565b60006200055562000568565b905062000563828262000614565b919050565b6000604051905090565b600067ffffffffffffffff82111562000590576200058f62000679565b5b6200059b82620006bc565b9050602081019050919050565b60005b83811015620005c8578082015181840152602081019050620005ab565b83811115620005d8576000848401525b50505050565b60006002820490506001821680620005f757607f821691505b602082108114156200060e576200060d6200064a565b5b50919050565b6200061f82620006bc565b810181811067ffffffffffffffff8211171562000641576200064062000679565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610ca580620006dd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c19d93fb11610071578063c19d93fb14610159578063cf25b09f14610177578063d8b0b49914610195578063f2fde38b146101b3578063f9af7444146101cf578063fb66c8c6146101ed576100b4565b80634d41892f146100b95780635062d68d146100d7578063715018a6146100f557806374196626146100ff57806375dca9fe1461011d5780638da5cb5b1461013b575b600080fd5b6100c161020b565b6040516100ce9190610a86565b60405180910390f35b6100df61029d565b6040516100ec9190610a86565b60405180910390f35b6100fd61032f565b005b6101076103b7565b6040516101149190610a86565b60405180910390f35b610125610449565b6040516101329190610a86565b60405180910390f35b6101436104db565b6040516101509190610a6b565b60405180910390f35b610161610504565b60405161016e9190610a86565b60405180910390f35b61017f610596565b60405161018c9190610a86565b60405180910390f35b61019d610628565b6040516101aa9190610a86565b60405180910390f35b6101cd60048036038101906101c891906109b0565b6106ba565b005b6101d76107b2565b6040516101e49190610a6b565b60405180910390f35b6101f56107dc565b6040516102029190610a86565b60405180910390f35b60606004805461021a90610b69565b80601f016020809104026020016040519081016040528092919081815260200182805461024690610b69565b80156102935780601f1061026857610100808354040283529160200191610293565b820191906000526020600020905b81548152906001019060200180831161027657829003601f168201915b5050505050905090565b6060600980546102ac90610b69565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610b69565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b61033761086e565b73ffffffffffffffffffffffffffffffffffffffff166103556104db565b73ffffffffffffffffffffffffffffffffffffffff16146103ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a290610ac8565b60405180910390fd5b6103b56000610876565b565b6060600380546103c690610b69565b80601f01602080910402602001604051908101604052809291908181526020018280546103f290610b69565b801561043f5780601f106104145761010080835404028352916020019161043f565b820191906000526020600020905b81548152906001019060200180831161042257829003601f168201915b5050505050905090565b60606005805461045890610b69565b80601f016020809104026020016040519081016040528092919081815260200182805461048490610b69565b80156104d15780601f106104a6576101008083540402835291602001916104d1565b820191906000526020600020905b8154815290600101906020018083116104b457829003601f168201915b5050505050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606006805461051390610b69565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90610b69565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050905090565b6060600780546105a590610b69565b80601f01602080910402602001604051908101604052809291908181526020018280546105d190610b69565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b5050505050905090565b60606008805461063790610b69565b80601f016020809104026020016040519081016040528092919081815260200182805461066390610b69565b80156106b05780601f10610685576101008083540402835291602001916106b0565b820191906000526020600020905b81548152906001019060200180831161069357829003601f168201915b5050505050905090565b6106c261086e565b73ffffffffffffffffffffffffffffffffffffffff166106e06104db565b73ffffffffffffffffffffffffffffffffffffffff1614610736576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072d90610ac8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d90610aa8565b60405180910390fd5b6107af81610876565b50565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600280546107eb90610b69565b80601f016020809104026020016040519081016040528092919081815260200182805461081790610b69565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506109aa81610c58565b92915050565b6000602082840312156109c6576109c5610bca565b5b60006109d48482850161099b565b91505092915050565b6109e681610b04565b82525050565b60006109f782610ae8565b610a018185610af3565b9350610a11818560208601610b36565b610a1a81610bcf565b840191505092915050565b6000610a32602683610af3565b9150610a3d82610be0565b604082019050919050565b6000610a55602083610af3565b9150610a6082610c2f565b602082019050919050565b6000602082019050610a8060008301846109dd565b92915050565b60006020820190508181036000830152610aa081846109ec565b905092915050565b60006020820190508181036000830152610ac181610a25565b9050919050565b60006020820190508181036000830152610ae181610a48565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000610b0f82610b16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015610b54578082015181840152602081019050610b39565b83811115610b63576000848401525b50505050565b60006002820490506001821680610b8157607f821691505b60208210811415610b9557610b94610b9b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610c6181610b04565b8114610c6c57600080fd5b5056fea26469706673582212202f08f4332d8798a4895c77c7cf2274f4f343f8484ee7f1b7f12d982908a43ad364736f6c63430008070033', 
            arguments:[surveyNo, street, area, cityTown, state, pin, country, region,]
        }).send({
            from: accounts[0],
            gas: '4700000'
        }).then(function(newContractInstance){
            window.newContractInstance = newContractInstance;
            $("#registerSuccess").text('Contract mined! address: ' + newContractInstance.options.address);
            $("#registerSuccess").css('display', 'block');
        });
    });
});
function searchLand()
{
    $("#searchDanger").css("display","none");
    if(window.polygonRegion)
    {
        window.polygonRegion.setMap(null);
    }
    try
    {
        var abi = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "surveyNo",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "street",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "area",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "cityTown",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "pin",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "country",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "region",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "area",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "cityTown",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "country",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pin",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "previousowner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "region",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "state",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "street",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "surveyNo",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        var contractAddress = $("#contractAddress1").val();
        async function search()
        {
            window.contract = await new web3.eth.Contract(abi, contractAddress);
            const surveyNo = await window.contract.methods.surveyNo().call();
            $("#surveyNo").text(surveyNo);
            const street = await window.contract.methods.street().call();
            $("#street").text(street);
            const area = await window.contract.methods.area().call();
            $("#area").text(area);
            const cityTown = await window.contract.methods.cityTown().call();
            $("#cityTown").text(cityTown);
            const state = await window.contract.methods.state().call();
            $("#state").text(state);
            const country = await window.contract.methods.country().call();
            $("#country").text(country);
            const pin = await window.contract.methods.pin().call();
            $("#pin").text(pin);
            const currentOwner = await window.contract.methods.owner().call();
            $("#currentOwner").text(currentOwner);
            const previousOwner = await window.contract.methods.previousowner().call();
            $("#previousOwner").text(previousOwner);
            const region = await window.contract.methods.region().call();
            const coords = region.split(";");
            const polygon = [];
            var itr=0;
            var latSum = 0;
            var longSum = 0;
            coords.forEach(function(item, index){
                latitude = item.split(',')[0];
                longitude = item.split(',')[1];
                latitude = latitude.substring(1);
                longitude = longitude.slice(0,-1);
                var dict = {}
                dict['lat'] = parseFloat(latitude);
                dict['lng'] = parseFloat(longitude);
                latSum = latSum + dict['lat'];
                longSum = longSum + dict['lng'];
                polygon[itr] = dict;
                itr++;
            });
            const polygonRegion = new google.maps.Polygon({
              paths: polygon,
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.35,
            });
            window.polygonRegion = polygonRegion;
            polygonRegion.setMap(map);
            map.setCenter({lat:(latSum/itr), lng:(longSum/itr), alt:0});
        }
        search();
    }
    catch(err)
    {
        $("#searchDanger").text(err);
        $("#searchDanger").css("display", "block");
    }
}
function transferLand()
{
    $("#transferSuccess").css("display","none");
    $("#transferDanger").css("display","none");
    try
    {
        var abi = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "surveyNo",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "street",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "area",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "cityTown",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "pin",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "country",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "region",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "area",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "cityTown",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "country",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pin",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "previousowner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "region",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "state",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "street",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "surveyNo",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        var contractAddress = $("#contractAddress2").val();
        var newOwnerAddress = $("#newOwnerAddress").val();
        async function transfer()
        {
            window.contract = await new web3.eth.Contract(abi, contractAddress);
            web3.eth.getAccounts().then(function(acc){
                accounts = acc;
                window.contract.methods.transferOwnership(newOwnerAddress).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if (!err)
                    {
                        $("#transferSuccess").text("Transfer of Ownership successful!");
                        $("#transferSuccess").css("display","block");
                    }
                    else
                    {
                        $("#transferDanger").text(err);
                        $("#transferDanger").css("display","block");
                    }
                });
            });
        }
        transfer();
    }
    catch(err)
    {
        $("#transferDanger").text(err);
        $("#transferDanger").css("display","block");
    }   
}