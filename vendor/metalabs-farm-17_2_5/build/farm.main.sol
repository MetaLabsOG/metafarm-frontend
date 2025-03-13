// Automatically generated with Reach 0.1.11 (2d125008)
pragma abicoder v2;

pragma solidity ^0.8.12;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  uint256 _Some;
  }

enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  uint256 _Some;
  }

struct T2 {
  uint256 totalStaked;
  uint256 lastUpdateBlock;
  uint256 rewardPerTokenStored;
  uint256 rewardsPaid;
  }
struct T3 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T5 {
  address payable v1597;
  address payable v1598;
  address payable v1599;
  uint256 v1600;
  uint256 v1601;
  uint256 v1602;
  uint256 v1603;
  uint256 v1604;
  uint256 v1605;
  bool v1606;
  T3[2] v1623;
  uint256 v1626;
  }
struct T6 {
  address payable v1597;
  address payable v1598;
  address payable v1599;
  uint256 v1600;
  uint256 v1601;
  uint256 v1602;
  uint256 v1603;
  uint256 v1604;
  uint256 v1605;
  uint256 v1647;
  uint256 v1648;
  uint256 v1649;
  uint256 v1650;
  T3[2] v1657;
  uint256 v1658;
  }
struct T7 {
  address payable v1597;
  address payable v1598;
  address payable v1599;
  uint256 v1600;
  uint256 v1601;
  uint256 v1602;
  uint256 v1603;
  uint256 v1604;
  uint256 v1605;
  bool v1606;
  uint256 v1646;
  uint256 v1647;
  uint256 v1648;
  uint256 v1649;
  uint256 v1650;
  T3[2] v1657;
  uint256 v1658;
  }
struct T8 {
  address payable stakeToken;
  address payable rewardToken;
  uint256 beginBlock;
  uint256 endBlock;
  uint256 rewardPerBlock;
  uint256 stakeFee;
  uint256 unstakeFee;
  uint256 lockLengthBlocks;
  }
struct T9 {
  uint256 staked;
  uint256 reward;
  uint256 lockTimestamp;
  uint256 rewardPerTokenPaid;
  }
struct T10 {
  address payable v1598;
  address payable v1599;
  uint256 v1600;
  uint256 v1601;
  uint256 v1602;
  uint256 v1603;
  uint256 v1604;
  uint256 v1605;
  bool v1606;
  }
struct T11 {
  uint256 time;
  T10 msg;
  }
struct T12 {
  address payable v1597;
  address payable v1598;
  address payable v1599;
  uint256 v1600;
  uint256 v1601;
  uint256 v1602;
  uint256 v1603;
  uint256 v1604;
  uint256 v1605;
  bool v1606;
  }
struct T13 {
  uint256 v1646;
  uint256 v1647;
  uint256 v1648;
  uint256 v1649;
  uint256 v1650;
  uint256 v1651;
  T3[2] v1657;
  uint256 v1658;
  }
struct T14 {
  T12 svs;
  T13 msg;
  }
struct T16 {
  uint256 time;
  bool msg;
  }
struct T18 {
  uint256 elem0;
  }
enum _enum_T19 {claim0_163, recalculateRewards0_163, setTime0_163, stake0_163, unstake0_163}
struct T19 {
  _enum_T19 which;
  bool _claim0_163;
  bool _recalculateRewards0_163;
  T18 _setTime0_163;
  T18 _stake0_163;
  T18 _unstake0_163;
  }

struct T20 {
  T19 v1863;
  }
struct T21 {
  uint256 time;
  T20 msg;
  }


contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  mapping (address => T0) map0;
  function __reachMap0Ref(address addr)  internal view returns (T0 memory res) {
    if (map0[addr].which == _enum_T0.Some) {
      res = map0[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap0Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap0Ref(addr);}
  
  mapping (address => T0) map1;
  function __reachMap1Ref(address addr)  internal view returns (T0 memory res) {
    if (map1[addr].which == _enum_T0.Some) {
      res = map1[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap1Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap1Ref(addr);}
  
  mapping (address => T0) map2;
  function __reachMap2Ref(address addr)  internal view returns (T0 memory res) {
    if (map2[addr].which == _enum_T0.Some) {
      res = map2[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap2Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap2Ref(addr);}
  
  mapping (address => T1) map3;
  function __reachMap3Ref(address addr)  internal view returns (T1 memory res) {
    if (map3[addr].which == _enum_T1.Some) {
      res = map3[addr];}
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }}
  function _reachMap3Ref(address addr)  external view returns (T1 memory res) {
    res = __reachMap3Ref(addr);}
  
  
  struct _F8037 {
    T2 v4417;
    }
  struct _F8038 {
    T2 v1668;
    }
  function global()  external view returns (T2 memory) {
    if (current_step == uint256(1)) {
      (T5 memory vvs) = abi.decode(current_svbs, (T5));
      reachRequire((false), uint256(7) /*'invalid view_i'*/);
      }
    if (current_step == uint256(3)) {
      (T6 memory vvs) = abi.decode(current_svbs, (T6));
      _F8037 memory _f;
      _f.v4417.totalStaked = vvs.v1650;
      _f.v4417.lastUpdateBlock = vvs.v1647;
      _f.v4417.rewardPerTokenStored = vvs.v1648;
      _f.v4417.rewardsPaid = vvs.v1649;
      
      
      return _f.v4417;
      
      
      }
    if (current_step == uint256(5)) {
      (T7 memory vvs) = abi.decode(current_svbs, (T7));
      _F8038 memory _f;
      _f.v1668.totalStaked = vvs.v1650;
      _f.v1668.lastUpdateBlock = vvs.v1647;
      _f.v1668.rewardPerTokenStored = vvs.v1648;
      _f.v1668.rewardsPaid = vvs.v1649;
      
      
      return _f.v1668;
      
      
      }
    reachRequire((false), uint256(7) /*'invalid view_i'*/);
    }
  
  
  struct _F8039 {
    T8 v4416;
    }
  struct _F8040 {
    T8 v1667;
    }
  function initial()  external view returns (T8 memory) {
    if (current_step == uint256(1)) {
      (T5 memory vvs) = abi.decode(current_svbs, (T5));
      reachRequire((false), uint256(8) /*'invalid view_i'*/);
      }
    if (current_step == uint256(3)) {
      (T6 memory vvs) = abi.decode(current_svbs, (T6));
      _F8039 memory _f;
      _f.v4416.stakeToken = vvs.v1598;
      _f.v4416.rewardToken = vvs.v1599;
      _f.v4416.beginBlock = vvs.v1600;
      _f.v4416.endBlock = vvs.v1601;
      _f.v4416.rewardPerBlock = vvs.v1602;
      _f.v4416.stakeFee = vvs.v1604;
      _f.v4416.unstakeFee = vvs.v1605;
      _f.v4416.lockLengthBlocks = vvs.v1603;
      
      
      return _f.v4416;
      
      
      }
    if (current_step == uint256(5)) {
      (T7 memory vvs) = abi.decode(current_svbs, (T7));
      _F8040 memory _f;
      _f.v1667.stakeToken = vvs.v1598;
      _f.v1667.rewardToken = vvs.v1599;
      _f.v1667.beginBlock = vvs.v1600;
      _f.v1667.endBlock = vvs.v1601;
      _f.v1667.rewardPerBlock = vvs.v1602;
      _f.v1667.stakeFee = vvs.v1604;
      _f.v1667.unstakeFee = vvs.v1605;
      _f.v1667.lockLengthBlocks = vvs.v1603;
      
      
      return _f.v1667;
      
      
      }
    reachRequire((false), uint256(8) /*'invalid view_i'*/);
    }
  
  
  struct _F8042 {
    T9 v4427;
    }
  struct _F8043 {
    T9 v1678;
    }
  function local(address payable v8041)  external view returns (T9 memory) {
    if (current_step == uint256(1)) {
      (T5 memory vvs) = abi.decode(current_svbs, (T5));
      reachRequire((false), uint256(9) /*'invalid view_i'*/);
      }
    if (current_step == uint256(3)) {
      (T6 memory vvs) = abi.decode(current_svbs, (T6));
      _F8042 memory _f;
      _f.v4427.staked = (((__reachMap0Ref(v8041)).which == _enum_T0.Some ? (__reachMap0Ref(v8041))._Some : uint256(0)));
      _f.v4427.reward = (((__reachMap1Ref(v8041)).which == _enum_T0.Some ? (__reachMap1Ref(v8041))._Some : uint256(0)));
      _f.v4427.lockTimestamp = (((__reachMap2Ref(v8041)).which == _enum_T0.Some ? (__reachMap2Ref(v8041))._Some : uint256(0)));
      _f.v4427.rewardPerTokenPaid = (((__reachMap3Ref(v8041)).which == _enum_T1.Some ? (__reachMap3Ref(v8041))._Some : uint256(0)));
      
      
      return _f.v4427;
      
      
      }
    if (current_step == uint256(5)) {
      (T7 memory vvs) = abi.decode(current_svbs, (T7));
      _F8043 memory _f;
      _f.v1678.staked = (((__reachMap0Ref(v8041)).which == _enum_T0.Some ? (__reachMap0Ref(v8041))._Some : uint256(0)));
      _f.v1678.reward = (((__reachMap1Ref(v8041)).which == _enum_T0.Some ? (__reachMap1Ref(v8041))._Some : uint256(0)));
      _f.v1678.lockTimestamp = (((__reachMap2Ref(v8041)).which == _enum_T0.Some ? (__reachMap2Ref(v8041))._Some : uint256(0)));
      _f.v1678.rewardPerTokenPaid = (((__reachMap3Ref(v8041)).which == _enum_T1.Some ? (__reachMap3Ref(v8041))._Some : uint256(0)));
      
      
      return _f.v1678;
      
      
      }
    reachRequire((false), uint256(9) /*'invalid view_i'*/);
    }
  
  
  
  function array_set4(T3[2] memory arr, uint256 idx, T3 memory val)  pure internal returns (T3[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];}
    arrp[idx] = val;
    }
  
  struct ApiRng {
    uint256 claim;
    T9 recalculateRewards;
    T9 setTime;
    uint256 stake;
    uint256 unstake;
    }
  event _reach_oe_v2024(uint256 v0);
  event _reach_oe_v2069(uint256 v0);
  event _reach_oe_v2648(T9 v0);
  event _reach_oe_v3185(T9 v0);
  event _reach_oe_v3713(uint256 v0);
  event _reach_oe_v4288(uint256 v0);
  event claimed(address payable v0);
  event staked(address payable v0, uint256 v1);
  event unstaked(address payable v0, uint256 v1);
  
  
  event _reach_e0(address _who, T11 _a);
  struct _F0 {
    T3 v1566;
    T3[2] v1567;
    T3 v1615;
    T3[2] v1616;
    T3 v1622;
    T3[2] v1623;
    uint256 v1626;
    }
  constructor(T11 memory _a) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    _F0 memory _f;
    
    emit _reach_e0(msg.sender, _a);
    _f.v1566.elem0 = uint256(0);
    _f.v1566.elem1 = uint256(0);
    _f.v1566.elem2 = false;
    
    _f.v1567[0] = _f.v1566;
    _f.v1567[1] = _f.v1566;
    
    reachRequire((((_a.msg.v1598 == _a.msg.v1599) ? false : true)), uint256(10) /*'(./farm.rsh:144:11:dot,[],Just "non-network tokens distinct")'*/);
    _f.v1615.elem0 = uint256(0);
    _f.v1615.elem1 = ((_f.v1567[uint256(0)]).elem1);
    _f.v1615.elem2 = ((_f.v1567[uint256(0)]).elem2);
    
    _f.v1616 = array_set4(_f.v1567, uint256(0), _f.v1615);
    _f.v1622.elem0 = uint256(0);
    _f.v1622.elem1 = ((_f.v1616[uint256(1)]).elem1);
    _f.v1622.elem2 = ((_f.v1616[uint256(1)]).elem2);
    
    _f.v1623 = array_set4(_f.v1616, uint256(1), _f.v1622);
    reachRequire((msg.value == uint256(0)), uint256(11) /*'(./farm.rsh:144:11:dot,[],"verify network token pay amount")'*/);
    _f.v1626 = (_a.msg.v1601 - _a.msg.v1600) * _a.msg.v1602;
    T5 memory nsvs;
    nsvs.v1597 = payable(msg.sender);
    nsvs.v1598 = _a.msg.v1598;
    nsvs.v1599 = _a.msg.v1599;
    nsvs.v1600 = _a.msg.v1600;
    nsvs.v1601 = _a.msg.v1601;
    nsvs.v1602 = _a.msg.v1602;
    nsvs.v1603 = _a.msg.v1603;
    nsvs.v1604 = _a.msg.v1604;
    nsvs.v1605 = _a.msg.v1605;
    nsvs.v1606 = _a.msg.v1606;
    nsvs.v1623 = _f.v1623;
    nsvs.v1626 = _f.v1626;
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e1(address _who, T16 _a);
  struct _F1 {
    T3 v1637;
    }
  function _reach_m1(T16 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m1(_a, _r);
    }
  function _reach_m1(T16 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(1)), uint256(15) /*'state step check at ./farm.rsh:158:11:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(16) /*'state time check at ./farm.rsh:158:11:dot'*/);
    current_step = 0x0;
    (T5 memory _svs) = abi.decode(current_svbs, (T5));
    _F1 memory _f;
    
    emit _reach_e1(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(12) /*'(./farm.rsh:158:11:dot,[],"verify network token pay amount")'*/);
    _f.v1637.elem0 = (((_svs.v1623[uint256(1)]).elem0) + _svs.v1626);
    _f.v1637.elem1 = ((_svs.v1623[uint256(1)]).elem1);
    _f.v1637.elem2 = ((_svs.v1623[uint256(1)]).elem2);
    
    reachRequire((checkPayAmt(msg.sender, _svs.v1599, _svs.v1626)), uint256(13) /*'(./farm.rsh:158:11:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v1597 == payable(msg.sender))), uint256(14) /*'(./farm.rsh:158:11:dot,[],Just "sender correct")'*/);
    T14 memory la;
    la.svs.v1597 = _svs.v1597;
    la.svs.v1598 = _svs.v1598;
    la.svs.v1599 = _svs.v1599;
    la.svs.v1600 = _svs.v1600;
    la.svs.v1601 = _svs.v1601;
    la.svs.v1602 = _svs.v1602;
    la.svs.v1603 = _svs.v1603;
    la.svs.v1604 = _svs.v1604;
    la.svs.v1605 = _svs.v1605;
    la.svs.v1606 = _svs.v1606;
    la.msg.v1646 = (_svs.v1606 ? uint256(0) : uint256(block.number));
    la.msg.v1647 = uint256(0);
    la.msg.v1648 = uint256(0);
    la.msg.v1649 = uint256(0);
    la.msg.v1650 = uint256(0);
    la.msg.v1651 = uint256(block.number);
    la.msg.v1657 = (array_set4(_svs.v1623, uint256(1), _f.v1637));
    la.msg.v1658 = uint256(0);
    l2(la);
    
    
    }
  
  
  function l2(T14 memory _a)  internal {
    
    
    T7 memory nsvs;
    nsvs.v1597 = _a.svs.v1597;
    nsvs.v1598 = _a.svs.v1598;
    nsvs.v1599 = _a.svs.v1599;
    nsvs.v1600 = _a.svs.v1600;
    nsvs.v1601 = _a.svs.v1601;
    nsvs.v1602 = _a.svs.v1602;
    nsvs.v1603 = _a.svs.v1603;
    nsvs.v1604 = _a.svs.v1604;
    nsvs.v1605 = _a.svs.v1605;
    nsvs.v1606 = _a.svs.v1606;
    nsvs.v1646 = _a.msg.v1646;
    nsvs.v1647 = _a.msg.v1647;
    nsvs.v1648 = _a.msg.v1648;
    nsvs.v1649 = _a.msg.v1649;
    nsvs.v1650 = _a.msg.v1650;
    nsvs.v1657 = _a.msg.v1657;
    nsvs.v1658 = _a.msg.v1658;
    current_step = uint256(5);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e3(address _who, T16 _a);
  
  function _reach_m3(T16 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m3(_a, _r);
    }
  function _reach_m3(T16 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(3)), uint256(18) /*'state step check at ./farm.rsh:407:11:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(19) /*'state time check at ./farm.rsh:407:11:dot'*/);
    current_step = 0x0;
    (T6 memory _svs) = abi.decode(current_svbs, (T6));
    
    
    emit _reach_e3(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./farm.rsh:407:11:dot,[],"verify network token pay amount")'*/);
    _svs.v1597.transfer(_svs.v1658);
    safeTokenTransfer(_svs.v1599, _svs.v1597, ((_svs.v1657[uint256(1)]).elem0));
    safeTokenTransfer(_svs.v1598, _svs.v1597, ((_svs.v1657[uint256(0)]).elem0));
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    
    
    }
  
  event _reach_e4(address _who, T21 _a);
  struct _F4 {
    T3 v1950;
    T3[2] v1951;
    T3 v1959;
    T3[2] v1960;
    uint256 v1963;
    uint256 v1967;
    uint256 v1968;
    uint256 v1973;
    uint256 v1998;
    uint256 v1999;
    uint256 v2004;
    uint256 v2008;
    uint256 v2013;
    uint256 v2018;
    T3 v2043;
    uint256 v2046;
    uint256 v2058;
    uint256 v2075;
    T3 v2460;
    T3[2] v2461;
    T3 v2469;
    uint256 v2597;
    uint256 v2598;
    uint256 v2603;
    uint256 v2618;
    uint256 v2628;
    uint256 v2629;
    uint256 v2634;
    T9 v2648;
    uint256 v2659;
    T18 v2886;
    T3 v2970;
    T3[2] v2971;
    T3 v2979;
    T9 v3185;
    T18 v3396;
    T3 v3480;
    T3[2] v3481;
    T3 v3489;
    uint256 v3713;
    uint256 v3714;
    uint256 v3715;
    uint256 v3720;
    uint256 v3735;
    uint256 v3746;
    uint256 v3751;
    uint256 v3757;
    uint256 v3772;
    T18 v3906;
    T3 v3990;
    T3[2] v3991;
    T3 v3999;
    T3[2] v4000;
    uint256 v4290;
    uint256 v4297;
    uint256 v4298;
    uint256 v4303;
    uint256 v4329;
    uint256 v4334;
    uint256 v4338;
    uint256 v4343;
    uint256 v4350;
    uint256 v4358;
    T3 v4369;
    uint256 v4378;
    uint256 v4383;
    uint256 v4391;
    T3 v4402;
    uint256 v4411;
    }
  function _reach_m4(T21 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m4(_a, _r);
    }
  function _reach_m4(T21 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(5)), uint256(41) /*'state step check at ./farm.rsh:196:21:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(42) /*'state time check at ./farm.rsh:196:21:dot'*/);
    current_step = 0x0;
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    _F4 memory _f;
    
    emit _reach_e4(msg.sender, _a);
    if (_a.msg.v1863.which == _enum_T19.claim0_163) {
      
      reachRequire((msg.value == uint256(0)), uint256(20) /*'(./farm.rsh:196:21:dot,[],"verify network token pay amount")'*/);
      _f.v1950.elem0 = ((_svs.v1657[uint256(0)]).elem0);
      _f.v1950.elem1 = ((_svs.v1657[uint256(0)]).elem1);
      _f.v1950.elem2 = ((_svs.v1657[uint256(0)]).elem2);
      
      _f.v1951 = array_set4(_svs.v1657, uint256(0), _f.v1950);
      reachRequire((checkPayAmt(msg.sender, _svs.v1598, uint256(0))), uint256(21) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
      _f.v1959.elem0 = ((_f.v1951[uint256(1)]).elem0);
      _f.v1959.elem1 = ((_f.v1951[uint256(1)]).elem1);
      _f.v1959.elem2 = ((_f.v1951[uint256(1)]).elem2);
      
      _f.v1960 = array_set4(_f.v1951, uint256(1), _f.v1959);
      reachRequire((checkPayAmt(msg.sender, _svs.v1599, uint256(0))), uint256(22) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
      _f.v1963 = ((__reachMap1Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap1Ref(payable(msg.sender)))._Some : uint256(0));
      reachRequire(((_f.v1963 < ((_f.v1960[uint256(1)]).elem0))), uint256(23) /*'(./farm.rsh:350:16:application,[at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)],Just "tried to claim more than contract has")'*/);
      if (_svs.v1606) {
        _f.v1968 = _svs.v1646;
        }
      else {
        _f.v1968 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
        }
      if (_svs.v1606) {
        _f.v1973 = _svs.v1646;
        }
      else {
        _f.v1973 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
        }
      if ((_svs.v1650 == uint256(0))) {
        _f.v1967 = _svs.v1648;
        }
      else {
        _f.v1967 = (_svs.v1648 + (((((((_f.v1968 < _svs.v1601) ? _f.v1973 : _svs.v1601) - _svs.v1647)) * (_svs.v1602)) * uint256(1000000000000000000)) / (_svs.v1650)));
        }
      _f.v1998 = (((((((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : uint256(0)))) * (_f.v1967 - (((__reachMap3Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachMap3Ref(payable(msg.sender)))._Some : uint256(0))))) / uint256(1000000000000000000))) + _f.v1963;
      map1[payable(msg.sender)].which = _enum_T0.Some;
      map1[payable(msg.sender)]._Some = _f.v1998;
      
      map3[payable(msg.sender)].which = _enum_T1.Some;
      map3[payable(msg.sender)]._Some = _f.v1967;
      
      if (_svs.v1606) {
        _f.v1999 = _svs.v1646;
        }
      else {
        _f.v1999 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
        }
      if (_svs.v1606) {
        _f.v2004 = _svs.v1646;
        }
      else {
        _f.v2004 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
        }
      _f.v2008 = (_f.v1999 < _svs.v1601) ? _f.v2004 : _svs.v1601;
      if (_svs.v1606) {
        _f.v2013 = _svs.v1646;
        }
      else {
        _f.v2013 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
        }
      if ((((((__reachMap2Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap2Ref(payable(msg.sender)))._Some : uint256(0))) + _svs.v1603) <= _f.v2013)) {
        if (_svs.v1606) {
          _f.v2018 = _svs.v1646;
          }
        else {
          _f.v2018 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        map2[payable(msg.sender)].which = _enum_T0.Some;
        map2[payable(msg.sender)]._Some = _f.v2018;
        
        map1[payable(msg.sender)].which = _enum_T0.Some;
        map1[payable(msg.sender)]._Some = uint256(0);
        
        emit _reach_oe_v2024( (_f.v1998));
        _apiRet.claim = (_f.v1998);
        
        if ((_f.v1998 < ((_f.v1960[uint256(1)]).elem0))) {
          _f.v2043.elem0 = (((_f.v1960[uint256(1)]).elem0) - _f.v1998);
          _f.v2043.elem1 = ((_f.v1960[uint256(1)]).elem1);
          _f.v2043.elem2 = ((_f.v1960[uint256(1)]).elem2);
          
          safeTokenTransfer(_svs.v1599, payable(msg.sender), _f.v1998);
          emit claimed( payable(msg.sender));
          
          
          if (_svs.v1606) {
            _f.v2046 = _svs.v1646;
            }
          else {
            _f.v2046 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
            }
          T14 memory la;
          la.svs.v1597 = _svs.v1597;
          la.svs.v1598 = _svs.v1598;
          la.svs.v1599 = _svs.v1599;
          la.svs.v1600 = _svs.v1600;
          la.svs.v1601 = _svs.v1601;
          la.svs.v1602 = _svs.v1602;
          la.svs.v1603 = _svs.v1603;
          la.svs.v1604 = _svs.v1604;
          la.svs.v1605 = _svs.v1605;
          la.svs.v1606 = _svs.v1606;
          la.msg.v1646 = _f.v2046;
          la.msg.v1647 = _f.v2008;
          la.msg.v1648 = _f.v1967;
          la.msg.v1649 = (_svs.v1649 + _f.v1998);
          la.msg.v1650 = _svs.v1650;
          la.msg.v1651 = uint256(block.number);
          la.msg.v1657 = (array_set4(_f.v1960, uint256(1), _f.v2043));
          la.msg.v1658 = _svs.v1658;
          l2(la);
          }
        else {
          emit claimed( payable(msg.sender));
          
          
          if (_svs.v1606) {
            _f.v2058 = _svs.v1646;
            }
          else {
            _f.v2058 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
            }
          T14 memory la;
          la.svs.v1597 = _svs.v1597;
          la.svs.v1598 = _svs.v1598;
          la.svs.v1599 = _svs.v1599;
          la.svs.v1600 = _svs.v1600;
          la.svs.v1601 = _svs.v1601;
          la.svs.v1602 = _svs.v1602;
          la.svs.v1603 = _svs.v1603;
          la.svs.v1604 = _svs.v1604;
          la.svs.v1605 = _svs.v1605;
          la.svs.v1606 = _svs.v1606;
          la.msg.v1646 = _f.v2058;
          la.msg.v1647 = _f.v2008;
          la.msg.v1648 = _f.v1967;
          la.msg.v1649 = (_svs.v1649 + _f.v1998);
          la.msg.v1650 = _svs.v1650;
          la.msg.v1651 = uint256(block.number);
          la.msg.v1657 = _f.v1960;
          la.msg.v1658 = _svs.v1658;
          l2(la);
          }}
      else {
        emit _reach_oe_v2069( (uint256(0)));
        _apiRet.claim = (uint256(0));
        
        if (_svs.v1606) {
          _f.v2075 = _svs.v1646;
          }
        else {
          _f.v2075 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        T14 memory la;
        la.svs.v1597 = _svs.v1597;
        la.svs.v1598 = _svs.v1598;
        la.svs.v1599 = _svs.v1599;
        la.svs.v1600 = _svs.v1600;
        la.svs.v1601 = _svs.v1601;
        la.svs.v1602 = _svs.v1602;
        la.svs.v1603 = _svs.v1603;
        la.svs.v1604 = _svs.v1604;
        la.svs.v1605 = _svs.v1605;
        la.svs.v1606 = _svs.v1606;
        la.msg.v1646 = _f.v2075;
        la.msg.v1647 = _f.v2008;
        la.msg.v1648 = _f.v1967;
        la.msg.v1649 = _svs.v1649;
        la.msg.v1650 = _svs.v1650;
        la.msg.v1651 = uint256(block.number);
        la.msg.v1657 = _f.v1960;
        la.msg.v1658 = _svs.v1658;
        l2(la);
        }
      }
    else {
      if (_a.msg.v1863.which == _enum_T19.recalculateRewards0_163) {
        
        reachRequire((msg.value == uint256(0)), uint256(24) /*'(./farm.rsh:196:21:dot,[],"verify network token pay amount")'*/);
        _f.v2460.elem0 = ((_svs.v1657[uint256(0)]).elem0);
        _f.v2460.elem1 = ((_svs.v1657[uint256(0)]).elem1);
        _f.v2460.elem2 = ((_svs.v1657[uint256(0)]).elem2);
        
        _f.v2461 = array_set4(_svs.v1657, uint256(0), _f.v2460);
        reachRequire((checkPayAmt(msg.sender, _svs.v1598, uint256(0))), uint256(25) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
        _f.v2469.elem0 = ((_f.v2461[uint256(1)]).elem0);
        _f.v2469.elem1 = ((_f.v2461[uint256(1)]).elem1);
        _f.v2469.elem2 = ((_f.v2461[uint256(1)]).elem2);
        
        reachRequire((checkPayAmt(msg.sender, _svs.v1599, uint256(0))), uint256(26) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
        if (_svs.v1606) {
          _f.v2598 = _svs.v1646;
          }
        else {
          _f.v2598 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        if (_svs.v1606) {
          _f.v2603 = _svs.v1646;
          }
        else {
          _f.v2603 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        if ((_svs.v1650 == uint256(0))) {
          _f.v2597 = _svs.v1648;
          }
        else {
          _f.v2597 = (_svs.v1648 + (((((((_f.v2598 < _svs.v1601) ? _f.v2603 : _svs.v1601) - _svs.v1647)) * (_svs.v1602)) * uint256(1000000000000000000)) / (_svs.v1650)));
          }
        _f.v2618 = ((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : uint256(0));
        _f.v2628 = ((((_f.v2618) * (_f.v2597 - (((__reachMap3Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachMap3Ref(payable(msg.sender)))._Some : uint256(0))))) / uint256(1000000000000000000))) + (((__reachMap1Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap1Ref(payable(msg.sender)))._Some : uint256(0)));
        map1[payable(msg.sender)].which = _enum_T0.Some;
        map1[payable(msg.sender)]._Some = _f.v2628;
        
        map3[payable(msg.sender)].which = _enum_T1.Some;
        map3[payable(msg.sender)]._Some = _f.v2597;
        
        if (_svs.v1606) {
          _f.v2629 = _svs.v1646;
          }
        else {
          _f.v2629 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        if (_svs.v1606) {
          _f.v2634 = _svs.v1646;
          }
        else {
          _f.v2634 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        _f.v2648.staked = _f.v2618;
        _f.v2648.reward = _f.v2628;
        _f.v2648.lockTimestamp = (((__reachMap2Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap2Ref(payable(msg.sender)))._Some : uint256(0)));
        _f.v2648.rewardPerTokenPaid = _f.v2597;
        
        emit _reach_oe_v2648( _f.v2648);
        _apiRet.recalculateRewards = _f.v2648;
        
        if (_svs.v1606) {
          _f.v2659 = _svs.v1646;
          }
        else {
          _f.v2659 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
          }
        T14 memory la;
        la.svs.v1597 = _svs.v1597;
        la.svs.v1598 = _svs.v1598;
        la.svs.v1599 = _svs.v1599;
        la.svs.v1600 = _svs.v1600;
        la.svs.v1601 = _svs.v1601;
        la.svs.v1602 = _svs.v1602;
        la.svs.v1603 = _svs.v1603;
        la.svs.v1604 = _svs.v1604;
        la.svs.v1605 = _svs.v1605;
        la.svs.v1606 = _svs.v1606;
        la.msg.v1646 = _f.v2659;
        la.msg.v1647 = ((_f.v2629 < _svs.v1601) ? _f.v2634 : _svs.v1601);
        la.msg.v1648 = _f.v2597;
        la.msg.v1649 = _svs.v1649;
        la.msg.v1650 = _svs.v1650;
        la.msg.v1651 = uint256(block.number);
        la.msg.v1657 = (array_set4(_f.v2461, uint256(1), _f.v2469));
        la.msg.v1658 = _svs.v1658;
        l2(la);
        
        }
      else {
        if (_a.msg.v1863.which == _enum_T19.setTime0_163) {
          _f.v2886 = _a.msg.v1863._setTime0_163;
          reachRequire((msg.value == uint256(0)), uint256(27) /*'(./farm.rsh:196:21:dot,[],"verify network token pay amount")'*/);
          _f.v2970.elem0 = ((_svs.v1657[uint256(0)]).elem0);
          _f.v2970.elem1 = ((_svs.v1657[uint256(0)]).elem1);
          _f.v2970.elem2 = ((_svs.v1657[uint256(0)]).elem2);
          
          _f.v2971 = array_set4(_svs.v1657, uint256(0), _f.v2970);
          reachRequire((checkPayAmt(msg.sender, _svs.v1598, uint256(0))), uint256(28) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
          _f.v2979.elem0 = ((_f.v2971[uint256(1)]).elem0);
          _f.v2979.elem1 = ((_f.v2971[uint256(1)]).elem1);
          _f.v2979.elem2 = ((_f.v2971[uint256(1)]).elem2);
          
          reachRequire((checkPayAmt(msg.sender, _svs.v1599, uint256(0))), uint256(29) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
          reachRequire((_svs.v1606), uint256(30) /*'(./farm.rsh:393:14:application,[at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)],Nothing)'*/);
          reachRequire((((_f.v2886.elem0) >= _svs.v1646)), uint256(31) /*'(./farm.rsh:394:14:application,[at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)],Nothing)'*/);
          _f.v3185.staked = (((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : uint256(0)));
          _f.v3185.reward = (((__reachMap1Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap1Ref(payable(msg.sender)))._Some : uint256(0)));
          _f.v3185.lockTimestamp = (((__reachMap2Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap2Ref(payable(msg.sender)))._Some : uint256(0)));
          _f.v3185.rewardPerTokenPaid = (((__reachMap3Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachMap3Ref(payable(msg.sender)))._Some : uint256(0)));
          
          emit _reach_oe_v3185( _f.v3185);
          _apiRet.setTime = _f.v3185;
          
          T14 memory la;
          la.svs.v1597 = _svs.v1597;
          la.svs.v1598 = _svs.v1598;
          la.svs.v1599 = _svs.v1599;
          la.svs.v1600 = _svs.v1600;
          la.svs.v1601 = _svs.v1601;
          la.svs.v1602 = _svs.v1602;
          la.svs.v1603 = _svs.v1603;
          la.svs.v1604 = _svs.v1604;
          la.svs.v1605 = _svs.v1605;
          la.svs.v1606 = _svs.v1606;
          la.msg.v1646 = (_f.v2886.elem0);
          la.msg.v1647 = _svs.v1647;
          la.msg.v1648 = _svs.v1648;
          la.msg.v1649 = _svs.v1649;
          la.msg.v1650 = _svs.v1650;
          la.msg.v1651 = uint256(block.number);
          la.msg.v1657 = (array_set4(_f.v2971, uint256(1), _f.v2979));
          la.msg.v1658 = _svs.v1658;
          l2(la);
          
          }
        else {
          if (_a.msg.v1863.which == _enum_T19.stake0_163) {
            _f.v3396 = _a.msg.v1863._stake0_163;
            reachRequire((msg.value == uint256(0)), uint256(32) /*'(./farm.rsh:196:21:dot,[],"verify network token pay amount")'*/);
            _f.v3480.elem0 = (((_svs.v1657[uint256(0)]).elem0) + (_f.v3396.elem0));
            _f.v3480.elem1 = ((_svs.v1657[uint256(0)]).elem1);
            _f.v3480.elem2 = ((_svs.v1657[uint256(0)]).elem2);
            
            _f.v3481 = array_set4(_svs.v1657, uint256(0), _f.v3480);
            reachRequire((checkPayAmt(msg.sender, _svs.v1598, (_f.v3396.elem0))), uint256(33) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
            _f.v3489.elem0 = ((_f.v3481[uint256(1)]).elem0);
            _f.v3489.elem1 = ((_f.v3481[uint256(1)]).elem1);
            _f.v3489.elem2 = ((_f.v3481[uint256(1)]).elem2);
            
            reachRequire((checkPayAmt(msg.sender, _svs.v1599, uint256(0))), uint256(34) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
            reachRequire(((_svs.v1646 <= _svs.v1601)), uint256(35) /*'(./farm.rsh:286:14:application,[at ./farm.rsh:285:27:application call to [unknown function] (defined at: ./farm.rsh:285:27:function exp)],Just "cannot stake when no rewards left")'*/);
            _f.v3713 = (_f.v3396.elem0) - (((_f.v3396.elem0) * _svs.v1604) / uint256(1000000));
            if (_svs.v1606) {
              _f.v3715 = _svs.v1646;
              }
            else {
              _f.v3715 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            if (_svs.v1606) {
              _f.v3720 = _svs.v1646;
              }
            else {
              _f.v3720 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            if ((_svs.v1650 == uint256(0))) {
              _f.v3714 = _svs.v1648;
              }
            else {
              _f.v3714 = (_svs.v1648 + (((((((_f.v3715 < _svs.v1601) ? _f.v3720 : _svs.v1601) - _svs.v1647)) * (_svs.v1602)) * uint256(1000000000000000000)) / (_svs.v1650)));
              }
            _f.v3735 = ((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : uint256(0));
            map1[payable(msg.sender)].which = _enum_T0.Some;
            map1[payable(msg.sender)]._Some = (((((_f.v3735) * (_f.v3714 - (((__reachMap3Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachMap3Ref(payable(msg.sender)))._Some : uint256(0))))) / uint256(1000000000000000000))) + (((__reachMap1Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap1Ref(payable(msg.sender)))._Some : uint256(0))));
            
            map3[payable(msg.sender)].which = _enum_T1.Some;
            map3[payable(msg.sender)]._Some = _f.v3714;
            
            if (_svs.v1606) {
              _f.v3746 = _svs.v1646;
              }
            else {
              _f.v3746 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            if (_svs.v1606) {
              _f.v3751 = _svs.v1646;
              }
            else {
              _f.v3751 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            if (_svs.v1606) {
              _f.v3757 = _svs.v1646;
              }
            else {
              _f.v3757 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            map2[payable(msg.sender)].which = _enum_T0.Some;
            map2[payable(msg.sender)]._Some = _f.v3757;
            
            map0[payable(msg.sender)].which = _enum_T0.Some;
            map0[payable(msg.sender)]._Some = (_f.v3735 + _f.v3713);
            
            emit staked( payable(msg.sender),  _f.v3713);
            
            
            emit _reach_oe_v3713( _f.v3713);
            _apiRet.stake = _f.v3713;
            
            if (_svs.v1606) {
              _f.v3772 = _svs.v1646;
              }
            else {
              _f.v3772 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
              }
            T14 memory la;
            la.svs.v1597 = _svs.v1597;
            la.svs.v1598 = _svs.v1598;
            la.svs.v1599 = _svs.v1599;
            la.svs.v1600 = _svs.v1600;
            la.svs.v1601 = _svs.v1601;
            la.svs.v1602 = _svs.v1602;
            la.svs.v1603 = _svs.v1603;
            la.svs.v1604 = _svs.v1604;
            la.svs.v1605 = _svs.v1605;
            la.svs.v1606 = _svs.v1606;
            la.msg.v1646 = _f.v3772;
            la.msg.v1647 = ((_f.v3746 < _svs.v1601) ? _f.v3751 : _svs.v1601);
            la.msg.v1648 = _f.v3714;
            la.msg.v1649 = _svs.v1649;
            la.msg.v1650 = (_svs.v1650 + _f.v3713);
            la.msg.v1651 = uint256(block.number);
            la.msg.v1657 = (array_set4(_f.v3481, uint256(1), _f.v3489));
            la.msg.v1658 = _svs.v1658;
            l2(la);
            
            }
          else {
            if (_a.msg.v1863.which == _enum_T19.unstake0_163) {
              _f.v3906 = _a.msg.v1863._unstake0_163;
              reachRequire((msg.value == uint256(0)), uint256(36) /*'(./farm.rsh:196:21:dot,[],"verify network token pay amount")'*/);
              _f.v3990.elem0 = ((_svs.v1657[uint256(0)]).elem0);
              _f.v3990.elem1 = ((_svs.v1657[uint256(0)]).elem1);
              _f.v3990.elem2 = ((_svs.v1657[uint256(0)]).elem2);
              
              _f.v3991 = array_set4(_svs.v1657, uint256(0), _f.v3990);
              reachRequire((checkPayAmt(msg.sender, _svs.v1598, uint256(0))), uint256(37) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
              _f.v3999.elem0 = ((_f.v3991[uint256(1)]).elem0);
              _f.v3999.elem1 = ((_f.v3991[uint256(1)]).elem1);
              _f.v3999.elem2 = ((_f.v3991[uint256(1)]).elem2);
              
              _f.v4000 = array_set4(_f.v3991, uint256(1), _f.v3999);
              reachRequire((checkPayAmt(msg.sender, _svs.v1599, uint256(0))), uint256(38) /*'(./farm.rsh:196:21:dot,[],"verify non-network token pay amount")'*/);
              _f.v4290 = ((__reachMap0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap0Ref(payable(msg.sender)))._Some : uint256(0));
              reachRequire((((_f.v3906.elem0) <= _f.v4290)), uint256(39) /*'(./farm.rsh:313:14:application,[at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)],Just "tried to unstake more than staked on record")'*/);
              reachRequire((((_f.v3906.elem0) <= ((_f.v4000[uint256(0)]).elem0))), uint256(40) /*'(./farm.rsh:314:14:application,[at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)],Just "tried to unstake more than contract has")'*/);
              if (_svs.v1606) {
                _f.v4298 = _svs.v1646;
                }
              else {
                _f.v4298 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                }
              if (_svs.v1606) {
                _f.v4303 = _svs.v1646;
                }
              else {
                _f.v4303 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                }
              if ((_svs.v1650 == uint256(0))) {
                _f.v4297 = _svs.v1648;
                }
              else {
                _f.v4297 = (_svs.v1648 + (((((((_f.v4298 < _svs.v1601) ? _f.v4303 : _svs.v1601) - _svs.v1647)) * (_svs.v1602)) * uint256(1000000000000000000)) / (_svs.v1650)));
                }
              map1[payable(msg.sender)].which = _enum_T0.Some;
              map1[payable(msg.sender)]._Some = (((((_f.v4290) * (_f.v4297 - (((__reachMap3Ref(payable(msg.sender))).which == _enum_T1.Some ? (__reachMap3Ref(payable(msg.sender)))._Some : uint256(0))))) / uint256(1000000000000000000))) + (((__reachMap1Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap1Ref(payable(msg.sender)))._Some : uint256(0))));
              
              map3[payable(msg.sender)].which = _enum_T1.Some;
              map3[payable(msg.sender)]._Some = _f.v4297;
              
              if (_svs.v1606) {
                _f.v4329 = _svs.v1646;
                }
              else {
                _f.v4329 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                }
              if (_svs.v1606) {
                _f.v4334 = _svs.v1646;
                }
              else {
                _f.v4334 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                }
              _f.v4338 = (_f.v4329 < _svs.v1601) ? _f.v4334 : _svs.v1601;
              if (_svs.v1606) {
                _f.v4343 = _svs.v1646;
                }
              else {
                _f.v4343 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                }
              if ((((((__reachMap2Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachMap2Ref(payable(msg.sender)))._Some : uint256(0))) + _svs.v1603) <= _f.v4343)) {
                if (_svs.v1606) {
                  _f.v4383 = _svs.v1646;
                  }
                else {
                  _f.v4383 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                  }
                map2[payable(msg.sender)].which = _enum_T0.Some;
                map2[payable(msg.sender)]._Some = _f.v4383;
                
                map0[payable(msg.sender)].which = _enum_T0.Some;
                map0[payable(msg.sender)]._Some = (_f.v4290 - (_f.v3906.elem0));
                
                _f.v4391 = (_f.v3906.elem0) - (((_f.v3906.elem0) * _svs.v1605) / uint256(1000000));
                _f.v4402.elem0 = (((_f.v4000[uint256(0)]).elem0) - _f.v4391);
                _f.v4402.elem1 = ((_f.v4000[uint256(0)]).elem1);
                _f.v4402.elem2 = ((_f.v4000[uint256(0)]).elem2);
                
                safeTokenTransfer(_svs.v1598, payable(msg.sender), _f.v4391);
                emit unstaked( payable(msg.sender),  (_f.v3906.elem0));
                
                
                emit _reach_oe_v4288( (_f.v3906.elem0));
                _apiRet.unstake = (_f.v3906.elem0);
                
                if (_svs.v1606) {
                  _f.v4411 = _svs.v1646;
                  }
                else {
                  _f.v4411 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                  }
                T14 memory la;
                la.svs.v1597 = _svs.v1597;
                la.svs.v1598 = _svs.v1598;
                la.svs.v1599 = _svs.v1599;
                la.svs.v1600 = _svs.v1600;
                la.svs.v1601 = _svs.v1601;
                la.svs.v1602 = _svs.v1602;
                la.svs.v1603 = _svs.v1603;
                la.svs.v1604 = _svs.v1604;
                la.svs.v1605 = _svs.v1605;
                la.svs.v1606 = _svs.v1606;
                la.msg.v1646 = _f.v4411;
                la.msg.v1647 = _f.v4338;
                la.msg.v1648 = _f.v4297;
                la.msg.v1649 = _svs.v1649;
                la.msg.v1650 = (_svs.v1650 - (_f.v3906.elem0));
                la.msg.v1651 = uint256(block.number);
                la.msg.v1657 = (array_set4(_f.v4000, uint256(0), _f.v4402));
                la.msg.v1658 = _svs.v1658;
                l2(la);
                }
              else {
                map1[payable(msg.sender)].which = _enum_T0.Some;
                map1[payable(msg.sender)]._Some = uint256(0);
                
                if (_svs.v1606) {
                  _f.v4350 = _svs.v1646;
                  }
                else {
                  _f.v4350 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                  }
                map2[payable(msg.sender)].which = _enum_T0.Some;
                map2[payable(msg.sender)]._Some = _f.v4350;
                
                map0[payable(msg.sender)].which = _enum_T0.Some;
                map0[payable(msg.sender)]._Some = (_f.v4290 - (_f.v3906.elem0));
                
                _f.v4358 = (_f.v3906.elem0) - (((_f.v3906.elem0) * _svs.v1605) / uint256(1000000));
                _f.v4369.elem0 = (((_f.v4000[uint256(0)]).elem0) - _f.v4358);
                _f.v4369.elem1 = ((_f.v4000[uint256(0)]).elem1);
                _f.v4369.elem2 = ((_f.v4000[uint256(0)]).elem2);
                
                safeTokenTransfer(_svs.v1598, payable(msg.sender), _f.v4358);
                emit unstaked( payable(msg.sender),  (_f.v3906.elem0));
                
                
                emit _reach_oe_v4288( (_f.v3906.elem0));
                _apiRet.unstake = (_f.v3906.elem0);
                
                if (_svs.v1606) {
                  _f.v4378 = _svs.v1646;
                  }
                else {
                  _f.v4378 = ((uint256(block.number) < _svs.v1646) ? _svs.v1646 : uint256(block.number));
                  }
                T14 memory la;
                la.svs.v1597 = _svs.v1597;
                la.svs.v1598 = _svs.v1598;
                la.svs.v1599 = _svs.v1599;
                la.svs.v1600 = _svs.v1600;
                la.svs.v1601 = _svs.v1601;
                la.svs.v1602 = _svs.v1602;
                la.svs.v1603 = _svs.v1603;
                la.svs.v1604 = _svs.v1604;
                la.svs.v1605 = _svs.v1605;
                la.svs.v1606 = _svs.v1606;
                la.msg.v1646 = _f.v4378;
                la.msg.v1647 = _f.v4338;
                la.msg.v1648 = _f.v4297;
                la.msg.v1649 = _svs.v1649;
                la.msg.v1650 = (_svs.v1650 - (_f.v3906.elem0));
                la.msg.v1651 = uint256(block.number);
                la.msg.v1657 = (array_set4(_f.v4000, uint256(0), _f.v4369));
                la.msg.v1658 = _svs.v1658;
                l2(la);
                }
              }
            else {
              }}}}}
    
    }
  
  
  function claim()  external payable returns (uint256 ) {
    ApiRng memory _r;
    T21 memory _t;
    T19 memory _vt;
    _vt._claim0_163 = false;
    _vt.which = _enum_T19.claim0_163;
    _t.msg = T20(_vt);
    _reach_m4(_t, _r);
    return _r.claim;
    }
  
  function recalculateRewards()  external payable returns (T9  memory) {
    ApiRng memory _r;
    T21 memory _t;
    T19 memory _vt;
    _vt._recalculateRewards0_163 = false;
    _vt.which = _enum_T19.recalculateRewards0_163;
    _t.msg = T20(_vt);
    _reach_m4(_t, _r);
    return _r.recalculateRewards;
    }
  
  function setTime(uint256 _a0)  external payable returns (T9  memory) {
    ApiRng memory _r;
    T21 memory _t;
    T19 memory _vt;
    _vt._setTime0_163 = T18(_a0);
    _vt.which = _enum_T19.setTime0_163;
    _t.msg = T20(_vt);
    _reach_m4(_t, _r);
    return _r.setTime;
    }
  
  function stake(uint256 _a0)  external payable returns (uint256 ) {
    ApiRng memory _r;
    T21 memory _t;
    T19 memory _vt;
    _vt._stake0_163 = T18(_a0);
    _vt.which = _enum_T19.stake0_163;
    _t.msg = T20(_vt);
    _reach_m4(_t, _r);
    return _r.stake;
    }
  
  function unstake(uint256 _a0)  external payable returns (uint256 ) {
    ApiRng memory _r;
    T21 memory _t;
    T19 memory _vt;
    _vt._unstake0_163 = T18(_a0);
    _vt.which = _enum_T19.unstake0_163;
    _t.msg = T20(_vt);
    _reach_m4(_t, _r);
    return _r.unstake;
    }
  
  
  receive () external payable {}
  fallback () external payable {}
  
  }
