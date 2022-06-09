async function loadWeb3()
{
    if (window.ethereum)
    {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        var checkCurrentAccount = setInterval(function(){
            web3.eth.getAccounts().then(function(acc){
                $("#owner1").val(acc[0]);
            });
        }, 1000);
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
var nextOwner = 2;
var nextNewOwner = 2;
$("#searchButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#registerDanger").css("display", "none");
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
    for(i=2;i<nextOwner;i++)
    {
        $("#owner"+i).parent().parent().parent().remove();
    }
    nextOwner = 2;
    for(i=2;i<nextNewOwner;i++)
    {
        $("#newOwnerAddress"+i).parent().parent().parent().remove();
    }
    nextNewOwner = 2;
});
$("#registerButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#registerDanger").css("display", "none");
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
    for(i=2;i<nextOwner;i++)
    {
        $("#owner"+i).parent().parent().parent().remove();
    }
    nextOwner = 2;
    for(i=2;i<nextNewOwner;i++)
    {
        $("#newOwnerAddress"+i).parent().parent().parent().remove();
    }
    nextNewOwner = 2;
});
$("#transferButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#registerDanger").css("display", "none");
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
    for(i=2;i<nextOwner;i++)
    {
        $("#owner"+i).parent().parent().parent().remove();
    }
    nextOwner = 2;
    for(i=2;i<nextNewOwner;i++)
    {
        $("#newOwnerAddress"+i).parent().parent().parent().remove();
    }
    nextNewOwner = 2;
});
$("#teamButton").click(function()
{
    $("#searchDanger").css("display", "none");
    $("#registerSuccess").css("display", "none");
    $("#registerDanger").css("display", "none");
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
    for(i=2;i<nextOwner;i++)
    {
        $("#owner"+i).parent().parent().parent().remove();
    }
    nextOwner = 2;
    for(i=2;i<nextNewOwner;i++)
    {
        $("#newOwnerAddress"+i).parent().parent().parent().remove();
    }
    nextNewOwner = 2;
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
document.getElementById("addOwnerButton").addEventListener("click", function(){
    $(`<div class='form-group'>
        <label class='col-md-4 control-label'>Owner ` + nextOwner + `:</label>
        <div class='col-md-4 inputGroupContainer'>
            <div class='input-group'>
                <span class='input-group-addon'>
                    <i class='glyphicon glyphicon-user'></i>
                </span>
                <input id='owner` + nextOwner + `' placeholder='Metamask account address' class='form-control' type='text' required>
            </div>
        </div>
    </div>`).insertAfter($("#owner"+(nextOwner-1)).parent().parent().parent());
    nextOwner +=1;
});
document.getElementById("addLandForm").addEventListener("submit", function(event){
    event.preventDefault();
    $("#registerSuccess").css('display', 'none');
    $("#registerDanger").css('display', 'none');
    var surveyNo = $("#surveyNoRegister").val();
    var street = $("#streetRegister").val();
    var area = $("#areaRegister").val();
    var cityTown = $("#cityTownRegister").val();
    var state = $("#stateRegister").val();
    var pin = $("#pinRegister").val();
    var country = $("#countryRegister").val();
    var region = $("#regionRegister").val();
    var owners = []
    for(i=1;i<nextOwner;i++)
    {
        if(!window.web3.utils.isAddress($("#owner"+i).val()))
        {
            $("#registerDanger").text('The metamask wallet address of Owner '+i+' is not valid!');
            $("#registerDanger").css('display', 'block');
            return;
        }
        else
        {
            owners.push($("#owner"+i).val());
        }
    }
    $.ajax({
        type:"POST",
        url:"utilities/checkRegion.php",
        data: {"region":region},
        dataType:"html",
        success: function(data)
        {
            if(data=="0")
            {
                $("#registerDanger").text('The region intrudes others land!');
                $("#registerDanger").css('display', 'block');
            }
            if(data=="1")
            {
                web3.eth.getAccounts().then(function(acc){
                    accounts = acc;
                    var landregistryContract = new web3.eth.Contract([{"inputs":[{"internalType":"string","name":"surveyNo","type":"string"},{"internalType":"string","name":"street","type":"string"},{"internalType":"string","name":"area","type":"string"},{"internalType":"string","name":"cityTown","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"pin","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"region","type":"string"},{"internalType":"address[]","name":"owner","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address[]","name":"previousOwner","type":"address[]"},{"indexed":true,"internalType":"address[]","name":"newOwner","type":"address[]"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"area","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cityTown","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"country","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"owners","type":"address[]"},{"internalType":"address","name":"currentUser","type":"address"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pin","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousowner","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"region","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"street","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"surveyNo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"newOwner","type":"address[]"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
                    var landregistry = landregistryContract.deploy({
                        data: '0x60806040523480156200001157600080fd5b5060405162001adc38038062001adc8339818101604052810190620000379190620003a9565b88600090805190602001906200004f92919062000127565b5087600190805190602001906200006892919062000127565b5086600290805190602001906200008192919062000127565b5085600390805190602001906200009a92919062000127565b508460049080519060200190620000b392919062000127565b508360059080519060200190620000cc92919062000127565b508260069080519060200190620000e592919062000127565b508160079080519060200190620000fe92919062000127565b50806008908051906020019062000117929190620001b8565b50505050505050505050620007a5565b828054620001359062000697565b90600052602060002090601f016020900481019282620001595760008555620001a5565b82601f106200017457805160ff1916838001178555620001a5565b82800160010185558215620001a5579182015b82811115620001a457825182559160200191906001019062000187565b5b509050620001b4919062000247565b5090565b82805482825590600052602060002090810192821562000234579160200282015b82811115620002335782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190620001d9565b5b50905062000243919062000247565b5090565b5b808211156200026257600081600090555060010162000248565b5090565b60006200027d6200027784620005c8565b6200059f565b90508083825260208201905082856020860282011115620002a357620002a262000766565b5b60005b85811015620002d75781620002bc88826200032c565b845260208401935060208301925050600181019050620002a6565b5050509392505050565b6000620002f8620002f284620005f7565b6200059f565b9050828152602081018484840111156200031757620003166200076b565b5b6200032484828562000661565b509392505050565b6000815190506200033d816200078b565b92915050565b600082601f8301126200035b576200035a62000761565b5b81516200036d84826020860162000266565b91505092915050565b600082601f8301126200038e576200038d62000761565b5b8151620003a0848260208601620002e1565b91505092915050565b60008060008060008060008060006101208a8c031215620003cf57620003ce62000775565b5b60008a015167ffffffffffffffff811115620003f057620003ef62000770565b5b620003fe8c828d0162000376565b99505060208a015167ffffffffffffffff81111562000422576200042162000770565b5b620004308c828d0162000376565b98505060408a015167ffffffffffffffff81111562000454576200045362000770565b5b620004628c828d0162000376565b97505060608a015167ffffffffffffffff81111562000486576200048562000770565b5b620004948c828d0162000376565b96505060808a015167ffffffffffffffff811115620004b857620004b762000770565b5b620004c68c828d0162000376565b95505060a08a015167ffffffffffffffff811115620004ea57620004e962000770565b5b620004f88c828d0162000376565b94505060c08a015167ffffffffffffffff8111156200051c576200051b62000770565b5b6200052a8c828d0162000376565b93505060e08a015167ffffffffffffffff8111156200054e576200054d62000770565b5b6200055c8c828d0162000376565b9250506101008a015167ffffffffffffffff81111562000581576200058062000770565b5b6200058f8c828d0162000343565b9150509295985092959850929598565b6000620005ab620005be565b9050620005b98282620006cd565b919050565b6000604051905090565b600067ffffffffffffffff821115620005e657620005e562000732565b5b602082029050602081019050919050565b600067ffffffffffffffff82111562000615576200061462000732565b5b62000620826200077a565b9050602081019050919050565b60006200063a8262000641565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200068157808201518184015260208101905062000664565b8381111562000691576000848401525b50505050565b60006002820490506001821680620006b057607f821691505b60208210811415620006c757620006c662000703565b5b50919050565b620006d8826200077a565b810181811067ffffffffffffffff82111715620006fa57620006f962000732565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b62000796816200062d565b8114620007a257600080fd5b50565b61132780620007b56000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c19d93fb11610071578063c19d93fb1461016b578063c8a6f30b14610189578063cf25b09f146101b9578063d8b0b499146101d7578063f9af7444146101f5578063fb66c8c614610213576100b4565b806318bcd3d0146100b95780634d41892f146100d55780635062d68d146100f3578063741966261461011157806375dca9fe1461012f5780638da5cb5b1461014d575b600080fd5b6100d360048036038101906100ce9190610cb6565b610231565b005b6100dd6103bd565b6040516100ea9190610f47565b60405180910390f35b6100fb61044f565b6040516101089190610f47565b60405180910390f35b6101196104e1565b6040516101269190610f47565b60405180910390f35b610137610573565b6040516101449190610f47565b60405180910390f35b610155610605565b6040516101629190610f0a565b60405180910390f35b610173610693565b6040516101809190610f47565b60405180910390f35b6101a3600480360381019061019e9190610cff565b610725565b6040516101b09190610f2c565b60405180910390f35b6101c16107ad565b6040516101ce9190610f47565b60405180910390f35b6101df61083f565b6040516101ec9190610f47565b60405180910390f35b6101fd6108d1565b60405161020a9190610f0a565b60405180910390f35b61021b61095f565b6040516102289190610f47565b60405180910390f35b6102c860088054806020026020016040519081016040528092919081815260200182805480156102b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161026c575b50505050506102c36109f1565b610725565b610307576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fe90610f89565b60405180910390fd5b60005b81518110156103b057600073ffffffffffffffffffffffffffffffffffffffff1682828151811061033e5761033d6111df565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16141561039d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039490610f69565b60405180910390fd5b80806103a890611138565b91505061030a565b506103ba816109f9565b50565b6060600280546103cc906110d5565b80601f01602080910402602001604051908101604052809291908181526020018280546103f8906110d5565b80156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b5050505050905090565b60606007805461045e906110d5565b80601f016020809104026020016040519081016040528092919081815260200182805461048a906110d5565b80156104d75780601f106104ac576101008083540402835291602001916104d7565b820191906000526020600020905b8154815290600101906020018083116104ba57829003601f168201915b5050505050905090565b6060600180546104f0906110d5565b80601f016020809104026020016040519081016040528092919081815260200182805461051c906110d5565b80156105695780601f1061053e57610100808354040283529160200191610569565b820191906000526020600020905b81548152906001019060200180831161054c57829003601f168201915b5050505050905090565b606060038054610582906110d5565b80601f01602080910402602001604051908101604052809291908181526020018280546105ae906110d5565b80156105fb5780601f106105d0576101008083540402835291602001916105fb565b820191906000526020600020905b8154815290600101906020018083116105de57829003601f168201915b5050505050905090565b6060600880548060200260200160405190810160405280929190818152602001828054801561068957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161063f575b5050505050905090565b6060600480546106a2906110d5565b80601f01602080910402602001604051908101604052809291908181526020018280546106ce906110d5565b801561071b5780601f106106f05761010080835404028352916020019161071b565b820191906000526020600020905b8154815290600101906020018083116106fe57829003601f168201915b5050505050905090565b600080600090505b83518110156107a1578273ffffffffffffffffffffffffffffffffffffffff168482815181106107605761075f6111df565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16141561078e5760019150506107a7565b808061079990611138565b91505061072d565b50600090505b92915050565b6060600580546107bc906110d5565b80601f01602080910402602001604051908101604052809291908181526020018280546107e8906110d5565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b5050505050905090565b60606006805461084e906110d5565b80601f016020809104026020016040519081016040528092919081815260200182805461087a906110d5565b80156108c75780601f1061089c576101008083540402835291602001916108c7565b820191906000526020600020905b8154815290600101906020018083116108aa57829003601f168201915b5050505050905090565b6060600980548060200260200160405190810160405280929190818152602001828054801561095557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161090b575b5050505050905090565b60606000805461096e906110d5565b80601f016020809104026020016040519081016040528092919081815260200182805461099a906110d5565b80156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b5050505050905090565b600033905090565b60006008805480602002602001604051908101604052809291908181526020018280548015610a7d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a33575b5050505050905060086009908054610a96929190610b0a565b508160089080519060200190610aad929190610b5c565b5081604051610abc9190610ef3565b604051809103902081604051610ad29190610ef3565b60405180910390207fe62c04bb3499d4f432a50e07318d42861c4865afb22ee4cfe403d4f94550709060405160405180910390a35050565b828054828255906000526020600020908101928215610b4b5760005260206000209182015b82811115610b4a578254825591600101919060010190610b2f565b5b509050610b589190610be6565b5090565b828054828255906000526020600020908101928215610bd5579160200282015b82811115610bd45782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610b7c565b5b509050610be29190610be6565b5090565b5b80821115610bff576000816000905550600101610be7565b5090565b6000610c16610c1184610fce565b610fa9565b90508083825260208201905082856020860282011115610c3957610c38611242565b5b60005b85811015610c695781610c4f8882610c73565b845260208401935060208301925050600181019050610c3c565b5050509392505050565b600081359050610c82816112da565b92915050565b600082601f830112610c9d57610c9c61123d565b5b8135610cad848260208601610c03565b91505092915050565b600060208284031215610ccc57610ccb61124c565b5b600082013567ffffffffffffffff811115610cea57610ce9611247565b5b610cf684828501610c88565b91505092915050565b60008060408385031215610d1657610d1561124c565b5b600083013567ffffffffffffffff811115610d3457610d33611247565b5b610d4085828601610c88565b9250506020610d5185828601610c73565b9150509250929050565b6000610d678383610d8b565b60208301905092915050565b6000610d7f8383610d9a565b60208301905092915050565b610d948161105a565b82525050565b610da38161105a565b82525050565b6000610db48261100a565b610dbe818561102d565b9350610dc983610ffa565b8060005b83811015610dfa578151610de18882610d5b565b9750610dec83611020565b925050600181019050610dcd565b5085935050505092915050565b6000610e128261100a565b610e1c818561103e565b9350610e2783610ffa565b8060005b83811015610e58578151610e3f8882610d73565b9750610e4a83611020565b925050600181019050610e2b565b5085935050505092915050565b610e6e8161106c565b82525050565b6000610e7f82611015565b610e898185611049565b9350610e998185602086016110a2565b610ea281611251565b840191505092915050565b6000610eba602683611049565b9150610ec582611262565b604082019050919050565b6000610edd602083611049565b9150610ee8826112b1565b602082019050919050565b6000610eff8284610e07565b915081905092915050565b60006020820190508181036000830152610f248184610da9565b905092915050565b6000602082019050610f416000830184610e65565b92915050565b60006020820190508181036000830152610f618184610e74565b905092915050565b60006020820190508181036000830152610f8281610ead565b9050919050565b60006020820190508181036000830152610fa281610ed0565b9050919050565b6000610fb3610fc4565b9050610fbf8282611107565b919050565b6000604051905090565b600067ffffffffffffffff821115610fe957610fe861120e565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061106582611078565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156110c05780820151818401526020810190506110a5565b838111156110cf576000848401525b50505050565b600060028204905060018216806110ed57607f821691505b60208210811415611101576111006111b0565b5b50919050565b61111082611251565b810181811067ffffffffffffffff8211171561112f5761112e61120e565b5b80604052505050565b600061114382611098565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561117657611175611181565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6112e38161105a565b81146112ee57600080fd5b5056fea2646970667358221220a36c4cbf9f533f028145f9bfc28b5f0a305b516655ac7e0f32a6ba25096f07ec64736f6c63430008070033', 
                        arguments: [surveyNo,street,area,cityTown,state,pin,country,region,owners,]
                    }).send({
                        from: accounts[0],
                        gas: '4700000'
                    }).then(function(newContractInstance){
                        window.newContractInstance = newContractInstance;
                        $("#registerSuccess").text('Contract mined! address: ' + newContractInstance.options.address);
                        $("#registerSuccess").css('display', 'block');
                        $.post("utilities/addRegion.php", {"region":region});
                     });
                });
            }
        }
    });
});
function searchLand()
{
    $("#searchDanger").css("display","none");
    $("#surveyNo").text("-");
    $("#street").text("-");
    $("#area").text("-");
    $("#cityTown").text("-");
    $("#state").text("-");
    $("#country").text("-");
    $("#pin").text("-");
    $("#currentOwner").text("-");
    $("#previousOwner").text("-");
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
                            },
                            {
                                "internalType": "address[]",
                                "name": "owner",
                                "type": "address[]"
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
                                "internalType": "address[]",
                                "name": "previousOwner",
                                "type": "address[]"
                            },
                            {
                                "indexed": true,
                                "internalType": "address[]",
                                "name": "newOwner",
                                "type": "address[]"
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
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "owners",
                                "type": "address[]"
                            },
                            {
                                "internalType": "address",
                                "name": "currentUser",
                                "type": "address"
                            }
                        ],
                        "name": "exist",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
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
                                "internalType": "address[]",
                                "name": "",
                                "type": "address[]"
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
                                "internalType": "address[]",
                                "name": "",
                                "type": "address[]"
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
                                "internalType": "address[]",
                                "name": "newOwner",
                                "type": "address[]"
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
            try
            {
                window.contract = await new web3.eth.Contract(abi, contractAddress);
            }
            catch(err)
            {
                $("#searchDanger").text(err.message);
                $("#searchDanger").css("display", "block");
                return;
            }
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
            const currentOwners = await window.contract.methods.owner().call();
            $("#currentOwner").html("");
            for(i=0;i<currentOwners.length;i++)
            {
                $("#currentOwner").append(currentOwners[i]+'<br/>');
            }
            const previousOwners = await window.contract.methods.previousowner().call();
            if(previousOwners.length!=0)
            {
                $("#previousOwner").html("");
                for(i=0;i<previousOwners.length;i++)
                {
                    $("#previousOwner").append(previousOwners[i]+'<br/>');
                }
            }
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
        $("#searchDanger").text(err.message);
        $("#searchDanger").css("display", "block");
    }
}
document.getElementById("newOwnerButton").addEventListener("click", function(){
    $(`<div class='form-group'>
        <label class='col-md-4 control-label'>New Owner ` + nextNewOwner + `:</label>
        <div class='col-md-4 inputGroupContainer'>
            <div class='input-group'>
                <span class='input-group-addon'>
                    <i class='glyphicon glyphicon-user'></i>
                </span>
                <input id='newOwnerAddress` + nextNewOwner + `' placeholder='New Owner ` + nextNewOwner + ` address' class='form-control' type='text' required>
            </div>
        </div>
    </div>`).insertAfter($("#newOwnerAddress"+(nextNewOwner-1)).parent().parent().parent());
    nextNewOwner +=1;
});
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
                    },
                    {
                        "internalType": "address[]",
                        "name": "owner",
                        "type": "address[]"
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
                        "internalType": "address[]",
                        "name": "previousOwner",
                        "type": "address[]"
                    },
                    {
                        "indexed": true,
                        "internalType": "address[]",
                        "name": "newOwner",
                        "type": "address[]"
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
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "owners",
                        "type": "address[]"
                    },
                    {
                        "internalType": "address",
                        "name": "currentUser",
                        "type": "address"
                    }
                ],
                "name": "exist",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
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
                        "internalType": "address[]",
                        "name": "",
                        "type": "address[]"
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
                        "internalType": "address[]",
                        "name": "",
                        "type": "address[]"
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
                        "internalType": "address[]",
                        "name": "newOwner",
                        "type": "address[]"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        var contractAddress = $("#contractAddress2").val();
        var newOwners = []
        for(i=1;i<nextNewOwner;i++)
        {
            if(!window.web3.utils.isAddress($("#newOwnerAddress"+i).val()))
            {
                $("#transferDanger").text('The metamask wallet address of the new owner '+i+' is not valid!');
                $("#transferDanger").css('display', 'block');
                return;
            }
            else
            {
                newOwners.push($("#newOwnerAddress"+i).val());
            }
        }
        async function transfer()
        {
            window.contract = await new web3.eth.Contract(abi, contractAddress);
            web3.eth.getAccounts().then(function(acc){
                accounts = acc;
                window.contract.methods.transferOwnership(newOwners).send({from: accounts[0], gas: 4000000}, function(err, result) {
                    if (!err)
                    {
                        $("#transferSuccess").text("Transfer of Ownership successful!");
                        $("#transferSuccess").css("display","block");
                    }
                    else
                    {
                        $("#transferDanger").text("This land is not yours! You cannot transfer the ownership");
                        $("#transferDanger").css("display","block");
                    }
                });
            });
        }
        transfer();
    }
    catch(err)
    {
        $("#transferDanger").text(err.message);
        $("#transferDanger").css("display","block");
    }   
}