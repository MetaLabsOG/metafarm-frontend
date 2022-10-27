export const approvalProgram = `#pragma version 6
txn ApplicationID
int 0
==
bnz main_l29
txn OnCompletion
int DeleteApplication
==
bnz main_l28
txn OnCompletion
int UpdateApplication
==
bnz main_l27
txn OnCompletion
int OptIn
==
bnz main_l26
txn OnCompletion
int CloseOut
==
bnz main_l25
txn OnCompletion
int NoOp
==
bnz main_l7
err
main_l7:
txna ApplicationArgs 0
byte "setup"
==
bnz main_l24
txna ApplicationArgs 0
byte "provide_b"
==
bnz main_l23
txna ApplicationArgs 0
byte "ls_withdraw"
==
bnz main_l22
txna ApplicationArgs 0
byte "withdraw_excessive_a"
==
bnz main_l21
txna ApplicationArgs 0
byte "change_priority"
==
bnz main_l20
txna ApplicationArgs 0
byte "end_vault"
==
bnz main_l19
txna ApplicationArgs 0
byte "auction_buy"
==
bnz main_l18
txna ApplicationArgs 0
byte "withdraw_b"
==
bnz main_l16
err
main_l16:
callsub withdrawb_15
main_l17:
int 0
return
main_l18:
callsub auctionbuy_18
b main_l17
main_l19:
callsub endvault_14
b main_l17
main_l20:
callsub changepriority_0
b main_l17
main_l21:
callsub withdrawexcessivea_13
b main_l17
main_l22:
callsub lswithdraw_12
b main_l17
main_l23:
callsub provideb_10
b main_l17
main_l24:
callsub setup_4
b main_l17
main_l25:
int 0
return
main_l26:
int 0
return
main_l27:
int 0
return
main_l28:
int 0
return
main_l29:
callsub init_1
int 1
return

// change_priority
changepriority_0:
global GroupSize
int 1
==
txn GroupIndex
int 0
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "priority_address"
app_global_get
==
assert
txn NumAppArgs
int 2
==
assert
byte "priority_address"
txna ApplicationArgs 1
app_global_put
int 1
return

// init
init_1:
byte "auction_length"
int 3600
app_global_put
byte "algo_fee"
int 1000000
app_global_put
int 1
return

// __optin_tokens
optintokens_2:
txn NumAssets
int 3
==
assert
byte "a_token"
txna Assets 0
app_global_put
byte "b_token"
txna Assets 1
app_global_put
byte "lp_token"
txna Assets 2
app_global_put
itxn_begin
int axfer
itxn_field TypeEnum
byte "a_token"
app_global_get
itxn_field XferAsset
global CurrentApplicationAddress
itxn_field AssetReceiver
int 0
itxn_field AssetAmount
int 0
itxn_field Fee
itxn_next
int axfer
itxn_field TypeEnum
byte "b_token"
app_global_get
itxn_field XferAsset
global CurrentApplicationAddress
itxn_field AssetReceiver
int 0
itxn_field AssetAmount
int 0
itxn_field Fee
itxn_next
int axfer
itxn_field TypeEnum
byte "lp_token"
app_global_get
itxn_field XferAsset
global CurrentApplicationAddress
itxn_field AssetReceiver
int 0
itxn_field AssetAmount
int 0
itxn_field Fee
itxn_submit
retsub

// __create_slp_token
createslptoken_3:
byte "a_token"
app_global_get
asset_params_get AssetUnitName
store 9
store 8
byte "b_token"
app_global_get
asset_params_get AssetTotal
store 11
store 10
byte "b_token"
app_global_get
asset_params_get AssetDecimals
store 13
store 12
byte "b_token"
app_global_get
asset_params_get AssetUnitName
store 15
store 14
itxn_begin
int acfg
itxn_field TypeEnum
load 10
itxn_field ConfigAssetTotal
load 12
itxn_field ConfigAssetDecimals
int 0
itxn_field ConfigAssetDefaultFrozen
load 8
byte "-"
concat
load 14
concat
byte " Cometa SLP"
concat
itxn_field ConfigAssetName
byte "SLP"
itxn_field ConfigAssetUnitName
byte "https://cometa.farm"
itxn_field ConfigAssetURL
itxn_submit
byte "slp_token"
itxn CreatedAssetID
app_global_put
retsub

// setup
setup_4:
byte "vault_run_blocks"
app_global_get
int 0
==
assert
global GroupSize
int 3
==
txn GroupIndex
int 0
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
gtxn 1 RekeyTo
global ZeroAddress
==
&&
gtxn 2 RekeyTo
global ZeroAddress
==
&&
assert
callsub optintokens_2
txn NumAppArgs
int 3
==
assert
byte "creator"
txn Sender
app_global_put
byte "priority_address"
txn Sender
app_global_put
byte "start_block"
global Round
app_global_put
txna ApplicationArgs 1
btoi
int 10000000
<
assert
txna ApplicationArgs 2
btoi
app_params_get AppAddress
store 7
store 6
byte "vault_run_blocks"
txna ApplicationArgs 1
btoi
app_global_put
byte "liquidity_pool_app"
txna ApplicationArgs 2
btoi
app_global_put
byte "liquidity_pool_address"
load 6
app_global_put
gtxn 1 TypeEnum
int pay
==
gtxn 1 Amount
int 1000000
==
&&
gtxn 1 Receiver
global CurrentApplicationAddress
==
&&
gtxn 1 CloseRemainderTo
global ZeroAddress
==
&&
assert
gtxn 2 TypeEnum
int axfer
==
gtxn 2 XferAsset
byte "a_token"
app_global_get
==
&&
gtxn 2 AssetAmount
int 0
>
&&
gtxn 2 AssetReceiver
global CurrentApplicationAddress
==
&&
gtxn 2 CloseRemainderTo
global ZeroAddress
==
&&
assert
byte "initial_a_balance"
gtxn 2 AssetAmount
app_global_put
callsub createslptoken_3
int 1
return

// __is_vault_running
isvaultrunning_5:
global Round
byte "start_block"
app_global_get
byte "vault_run_blocks"
app_global_get
+
<
retsub

// __is_subscription
issubscription_6:
byte "fully_subscribed"
app_global_get
!
global Round
byte "start_block"
app_global_get
byte "vault_run_blocks"
app_global_get
int 5
/
+
<
&&
retsub

// __provide_liquidity
provideliquidity_7:
store 20
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
itxn_begin
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz provideliquidity_7_l23
int 1
provideliquidity_7_l2:
int 0
==
bnz provideliquidity_7_l22
byte "liquidity_pool_address"
app_global_get
byte "b_token"
app_global_get
load 20
callsub innertxsendtoken_11
provideliquidity_7_l4:
itxn_next
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz provideliquidity_7_l21
int 1
provideliquidity_7_l6:
int 1
==
bnz provideliquidity_7_l20
byte "liquidity_pool_address"
app_global_get
byte "b_token"
app_global_get
load 20
callsub innertxsendtoken_11
provideliquidity_7_l8:
itxn_next
int appl
itxn_field TypeEnum
byte "liquidity_pool_app"
app_global_get
itxn_field ApplicationID
byte "ADDLIQ"
itxn_field ApplicationArgs
int 0
itob
itxn_field ApplicationArgs
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz provideliquidity_7_l19
int 1
provideliquidity_7_l10:
int 0
==
bnz provideliquidity_7_l18
byte "b_token"
app_global_get
provideliquidity_7_l12:
itxn_field Assets
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz provideliquidity_7_l17
int 1
provideliquidity_7_l14:
int 1
==
bnz provideliquidity_7_l16
byte "b_token"
app_global_get
b provideliquidity_7_l24
provideliquidity_7_l16:
byte "a_token"
app_global_get
b provideliquidity_7_l24
provideliquidity_7_l17:
int 0
b provideliquidity_7_l14
provideliquidity_7_l18:
byte "a_token"
app_global_get
b provideliquidity_7_l12
provideliquidity_7_l19:
int 0
b provideliquidity_7_l10
provideliquidity_7_l20:
byte "liquidity_pool_address"
app_global_get
byte "a_token"
app_global_get
load 0
callsub innertxsendtoken_11
b provideliquidity_7_l8
provideliquidity_7_l21:
int 0
b provideliquidity_7_l6
provideliquidity_7_l22:
byte "liquidity_pool_address"
app_global_get
byte "a_token"
app_global_get
load 0
callsub innertxsendtoken_11
b provideliquidity_7_l4
provideliquidity_7_l23:
int 0
b provideliquidity_7_l2
provideliquidity_7_l24:
itxn_field Assets
byte "lp_token"
app_global_get
itxn_field Assets
itxn_submit
retsub

// __remove_liquidity
removeliquidity_8:
global CurrentApplicationAddress
byte "lp_token"
app_global_get
asset_holding_get AssetBalance
store 5
store 4
itxn_begin
byte "liquidity_pool_address"
app_global_get
byte "lp_token"
app_global_get
load 4
callsub innertxsendtoken_11
itxn_next
int appl
itxn_field TypeEnum
byte "liquidity_pool_app"
app_global_get
itxn_field ApplicationID
byte "REMLIQ"
itxn_field ApplicationArgs
int 0
itob
itxn_field ApplicationArgs
int 0
itob
itxn_field ApplicationArgs
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz removeliquidity_8_l11
int 1
removeliquidity_8_l2:
int 0
==
bnz removeliquidity_8_l10
byte "b_token"
app_global_get
removeliquidity_8_l4:
itxn_field Assets
byte "a_token"
app_global_get
byte "b_token"
app_global_get
<
bnz removeliquidity_8_l9
int 1
removeliquidity_8_l6:
int 1
==
bnz removeliquidity_8_l8
byte "b_token"
app_global_get
b removeliquidity_8_l12
removeliquidity_8_l8:
byte "a_token"
app_global_get
b removeliquidity_8_l12
removeliquidity_8_l9:
int 0
b removeliquidity_8_l6
removeliquidity_8_l10:
byte "a_token"
app_global_get
b removeliquidity_8_l4
removeliquidity_8_l11:
int 0
b removeliquidity_8_l2
removeliquidity_8_l12:
itxn_field Assets
byte "lp_token"
app_global_get
itxn_field Assets
itxn_submit
retsub

// __mint
mint_9:
store 25
store 24
itxn_begin
int axfer
itxn_field TypeEnum
byte "slp_token"
app_global_get
itxn_field XferAsset
load 24
itxn_field AssetReceiver
load 25
itxn_field AssetAmount
int 0
itxn_field Fee
itxn_submit
int 1
return

// provide_b
provideb_10:
global GroupSize
int 2
==
txn GroupIndex
int 1
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
gtxn 1 RekeyTo
global ZeroAddress
==
&&
assert
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
global CurrentApplicationAddress
byte "b_token"
app_global_get
asset_holding_get AssetBalance
store 3
store 2
load 0
store 16
load 2
store 17
callsub issubscription_6
assert
gtxn 0 TypeEnum
int axfer
==
gtxn 0 XferAsset
byte "b_token"
app_global_get
==
&&
gtxn 0 AssetAmount
int 0
>
&&
gtxn 0 AssetReceiver
global CurrentApplicationAddress
==
&&
gtxn 0 CloseRemainderTo
global ZeroAddress
==
&&
assert
gtxn 0 AssetAmount
callsub provideliquidity_7
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
global CurrentApplicationAddress
byte "b_token"
app_global_get
asset_holding_get AssetBalance
store 3
store 2
load 16
load 0
-
store 18
load 17
load 2
-
store 19
byte "total_a_liq_provided"
byte "total_a_liq_provided"
app_global_get
load 18
+
app_global_put
byte "total_b_liq_provided"
byte "total_b_liq_provided"
app_global_get
load 19
+
app_global_put
txn Sender
load 19
callsub mint_9
itxn_begin
txn Sender
byte "b_token"
app_global_get
gtxn 0 AssetAmount
load 19
-
callsub innertxsendtoken_11
itxn_submit
load 0
int 1000
*
byte "initial_a_balance"
app_global_get
<=
bz provideb_10_l2
byte "fully_subscribed"
int 1
app_global_put
provideb_10_l2:
int 1
return

// __inner_tx_send_token
innertxsendtoken_11:
store 23
store 22
store 21
int axfer
itxn_field TypeEnum
load 22
itxn_field XferAsset
load 21
itxn_field AssetReceiver
load 23
itxn_field AssetAmount
int 0
itxn_field Fee
retsub

// ls_withdraw
lswithdraw_12:
global GroupSize
int 1
==
txn GroupIndex
int 0
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
assert
itxn_begin
byte "creator"
app_global_get
byte "a_token"
app_global_get
byte "ls_a_accumulator"
app_global_get
callsub innertxsendtoken_11
itxn_next
byte "creator"
app_global_get
byte "b_token"
app_global_get
byte "ls_b_accumulator"
app_global_get
callsub innertxsendtoken_11
itxn_submit
byte "ls_a_accumulator"
int 0
app_global_put
byte "ls_b_accumulator"
int 0
app_global_put
int 1
return

// withdraw_excessive_a
withdrawexcessivea_13:
global GroupSize
int 1
==
txn GroupIndex
int 0
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
assert
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
load 0
int 0
>
callsub issubscription_6
!
&&
callsub isvaultrunning_5
&&
assert
itxn_begin
byte "creator"
app_global_get
byte "a_token"
app_global_get
load 0
callsub innertxsendtoken_11
itxn_submit
int 1
return

// end_vault
endvault_14:
callsub isvaultrunning_5
!
assert
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
global CurrentApplicationAddress
byte "b_token"
app_global_get
asset_holding_get AssetBalance
store 3
store 2
load 0
store 28
load 2
store 29
callsub removeliquidity_8
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
global CurrentApplicationAddress
byte "b_token"
app_global_get
asset_holding_get AssetBalance
store 3
store 2
int 1000
load 0
load 28
-
*
byte "total_a_liq_provided"
app_global_get
/
load 2
load 29
-
*
byte "total_b_liq_provided"
app_global_get
/
int 2
*
int 1000
-
store 26
byte "total_b_liq_provided"
app_global_get
load 26
*
int 1000
/
store 27
load 2
load 27
>=
bnz endvault_14_l2
byte "auction_start_block"
global Round
app_global_put
byte "auction_init_market_price"
load 0
load 28
-
int 1000
*
load 2
load 29
-
/
app_global_put
byte "auction_left_to_raise"
load 27
load 2
-
app_global_put
byte "auction_initial_left_to_raise"
load 27
load 2
-
app_global_put
b endvault_14_l3
endvault_14_l2:
byte "total_b_to_withdraw"
app_global_get
int 0
==
byte "ls_a_accumulator"
app_global_get
int 0
==
&&
byte "ls_b_accumulator"
app_global_get
int 0
==
&&
assert
byte "total_b_to_withdraw"
load 27
app_global_put
byte "ls_a_accumulator"
load 0
app_global_put
byte "ls_b_accumulator"
load 2
load 27
-
app_global_put
endvault_14_l3:
int 1
return

// withdraw_b
withdrawb_15:
global GroupSize
int 2
==
txn GroupIndex
int 0
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
gtxn 1 RekeyTo
global ZeroAddress
==
&&
assert
byte "total_b_to_withdraw"
app_global_get
int 0
>
assert
gtxn 1 TypeEnum
int axfer
==
gtxn 1 XferAsset
byte "slp_token"
app_global_get
==
&&
gtxn 1 AssetAmount
int 0
>
&&
gtxn 1 AssetReceiver
global CurrentApplicationAddress
==
&&
gtxn 1 CloseRemainderTo
global ZeroAddress
==
&&
assert
itxn_begin
txn Sender
byte "b_token"
app_global_get
gtxn 1 AssetAmount
byte "total_b_to_withdraw"
app_global_get
*
byte "total_b_liq_provided"
app_global_get
/
callsub innertxsendtoken_11
itxn_submit
int 1
return

// __auction_price_MULT
auctionpriceMULT_16:
global Round
byte "auction_start_block"
app_global_get
-
int 0
!=
assert
global Round
byte "auction_start_block"
app_global_get
-
int 3600
>=
bnz auctionpriceMULT_16_l2
byte "auction_init_market_price"
app_global_get
int 3600
global Round
byte "auction_start_block"
app_global_get
-
-
*
int 2
/
global Round
byte "auction_start_block"
app_global_get
-
/
retsub
auctionpriceMULT_16_l2:
int 1000
retsub

// __min
min_17:
store 34
store 33
load 33
load 34
<
bnz min_17_l2
load 34
retsub
min_17_l2:
load 33
retsub

// auction_buy
auctionbuy_18:
global GroupSize
int 2
==
txn GroupIndex
int 1
==
&&
assert
gtxn 0 RekeyTo
global ZeroAddress
==
gtxn 1 RekeyTo
global ZeroAddress
==
&&
assert
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
byte "auction_left_to_raise"
app_global_get
int 0
>
assert
txn NumAppArgs
int 1
==
assert
callsub auctionpriceMULT_16
store 30
txn Sender
byte "priority_address"
app_global_get
==
bnz auctionbuy_18_l6
auctionbuy_18_l1:
byte "auction_left_to_raise"
app_global_get
int 1000
*
load 30
callsub ceildiv_20
gtxn 0 AssetAmount
int 1000
*
load 30
/
callsub min_17
store 31
load 31
load 30
*
int 1000
callsub ceildiv_20
store 32
gtxn 0 TypeEnum
int axfer
==
gtxn 0 XferAsset
byte "b_token"
app_global_get
==
&&
gtxn 0 AssetAmount
load 32
>=
&&
gtxn 0 AssetReceiver
global CurrentApplicationAddress
==
&&
gtxn 0 CloseRemainderTo
global ZeroAddress
==
&&
assert
load 32
byte "auction_left_to_raise"
app_global_get
>
bnz auctionbuy_18_l5
byte "auction_left_to_raise"
byte "auction_left_to_raise"
app_global_get
load 32
-
app_global_put
auctionbuy_18_l3:
itxn_begin
txn Sender
byte "b_token"
app_global_get
gtxn 0 AssetAmount
load 32
-
callsub innertxsendtoken_11
itxn_next
txn Sender
byte "a_token"
app_global_get
load 31
callsub innertxsendtoken_11
itxn_submit
byte "auction_left_to_raise"
app_global_get
int 0
==
bz auctionbuy_18_l7
callsub auctionend_19
b auctionbuy_18_l7
auctionbuy_18_l5:
byte "auction_left_to_raise"
int 0
app_global_put
b auctionbuy_18_l3
auctionbuy_18_l6:
load 30
byte "auction_left_to_raise"
app_global_get
int 1000
*
load 0
callsub ceildiv_20
callsub min_17
store 30
b auctionbuy_18_l1
auctionbuy_18_l7:
int 1
return

// __auction_end
auctionend_19:
global Round
byte "start_block"
app_global_get
int 3600
+
>=
byte "auction_left_to_raise"
app_global_get
int 0
==
||
assert
global CurrentApplicationAddress
byte "a_token"
app_global_get
asset_holding_get AssetBalance
store 1
store 0
global CurrentApplicationAddress
byte "b_token"
app_global_get
asset_holding_get AssetBalance
store 3
store 2
byte "ls_a_accumulator"
app_global_get
int 0
==
assert
byte "ls_a_accumulator"
load 0
app_global_put
byte "total_b_to_withdraw"
load 2
app_global_put
int 1
return

// __ceil_div
ceildiv_20:
store 35
load 35
+
int 1
-
load 35
/
retsub`;
