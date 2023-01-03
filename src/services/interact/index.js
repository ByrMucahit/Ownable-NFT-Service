

export const connectWallet = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const ob = {
                status: "Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: ":(" + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        :/{" "}
                        <a target={"_blank"} href={`https://metamask.io/download.html`}>
                            You must install meta mask, a virtual ethereum wallet, in your browser.
                        </a>
                    </p>
                </span>
            )
        }
    }
}