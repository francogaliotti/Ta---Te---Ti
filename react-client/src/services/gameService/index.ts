import { Socket } from "socket.io-client";
import { ILostMessage, IPlayMatrix, IStartGame } from "../../components/game";

class GameService {
  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit("join_game", { roomId });
      socket.on("room_joined", () => rs(true));
      socket.on("room_join_error", ({ error }) => rj(error));
    });
  }

  public async leaveGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit("leave_game", { roomId });
      socket.on("room_leaved", () => rs(true));
      //socket.on("room_join_error", ({ error }) => rj(error));
    });
  }

  public async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
    socket.emit("update_game", { matrix: gameMatrix });
  }

  public async onGameUpdate(
    socket: Socket,
    listiner: (matrix: IPlayMatrix) => void
  ) {
    socket.on("on_game_update", ({ matrix }) => listiner(matrix));
  }

  public async onStartGame(
    socket: Socket,
    listiner: (options: IStartGame) => void
  ) {
    socket.on("start_game", listiner);
  }

  public async gameWin(socket: Socket, message: ILostMessage) {
    socket.emit("game_win", { message });
  }

  public async onGameWin(socket: Socket, listiner: (message: ILostMessage) => void) {
    socket.on("on_game_win", ({ message }) => listiner(message));
  }

  public async aloneInRoom(socket: Socket, listiner: () => void){
    socket.on("alone_in_room", listiner)
  }
}

export default new GameService();
