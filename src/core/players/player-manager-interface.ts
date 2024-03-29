import Entity from "core/entities/entity";

/**
 * An interface of what contains essential data belonging to the player.
 *
 * @interface IPlayerData
 */
interface IPlayerData {
    /**
     * The player's username.
     *
     * @type {string}
     * @memberof IPlayerData
     */
    name: string;
    /**
     * The entity which the player is controlling currently.
     * Null if the player is currently controlling no entity.
     *
     * @type {(Entity | null)}
     * @memberof IPlayerData
     */
    controllingEntity: Entity | null;
}

/**
 * A proxy for the methods used to retrieve data from a PlayerManager
 * This exists to prevent the Player objects from having direct access to the PlayerManager.
 *
 * @export
 * @class PlayerManagerInterface
 */
export default class PlayerManagerInterface {
    private _getData: (id: number) => IPlayerData;
    /**
     * Creates an instance of PlayerManagerInterface.
     * @param {(id: number) => IPlayerData} getData The function to get a player's data.
     * @memberof PlayerManagerInterface
     */
    constructor(getData: (id: number) => IPlayerData) {
        this._getData = getData;
    }
    /**
     * Get the username of a player
     *
     * @param {number} id The ID of the player
     * @returns {string} The username of the player.
     * @memberof PlayerManagerInterface
     */
    public getName(id: number): string {
        return this._getData(id).name;
    }
    /**
     * Get the entity a player is currently controlling.
     *
     * @param {number} id The ID of the player
     * @returns {(Entity | null)} An entity object if the player is controlling one, null if not.
     * @memberof PlayerManagerInterface
     */
    public getControllingEntity(id: number): Entity | null {
        return this._getData(id).controllingEntity;
    }
}
