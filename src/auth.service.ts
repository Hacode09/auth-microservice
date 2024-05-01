// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://zetglqre:XnUxoLRyoDJRVmeW6Ri7vCjgbSQ7-YVp@puffin.rmq2.cloudamqp.com/zetglqre'],
        queue: 'auth_queue',
      },
    });
  }

  async login(username: string, password: string): Promise<boolean> {
    // Simulate authentication logic
    const isAuthenticated = username === 'admin' && password === 'password';

    // Emit login event
    await this.client.emit('login', { username, isAuthenticated }).toPromise();

    return isAuthenticated;
  }
}
